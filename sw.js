// オフライン対応（Service Worker）
// 一度開いた端末では、電波がなくても・再読み込みしても、パンフレットと教室の画面が開けるようにする。
// ・ページ（HTML）：まず通信で最新を取りにいき、3秒で返事がない／失敗したら保存してある版を使う
// ・画像やJS：保存してある版をすぐ使い、裏で新しい版に入れ替える
// ファイルを更新したら VERSION を変えると、古い保存が消えて新しい版がそろう
const VERSION = "20261106b";
const CACHE = "koukasai-" + VERSION;
const CORE = [
  "./",
  "index.html",
  "display.html",
  "config.js?v=" + VERSION,
  "shops.js?v=" + VERSION,
  "festival.js?v=" + VERSION,
  "jsQR.js?v=" + VERSION,
  "qrcode.js?v=" + VERSION,
  "map.png",
  "cover.jpg",
  "stub.jpg"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(CORE.map(u => c.add(new Request(u, { cache: "reload" })).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("koukasai-") && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function timeout(ms) { return new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), ms)); }

// HTML：通信優先（3秒まで）→ だめなら保存版。?s=… つきのURL（QR）でも index.html を返す
async function pageRequest(req) {
  const cache = await caches.open(CACHE);
  try {
    const res = await Promise.race([fetch(req), timeout(3000)]);
    if (res && res.ok) {
      const url = new URL(req.url);
      const key = url.pathname.endsWith("display.html") ? "display.html" : "index.html";
      cache.put(key, res.clone());
      return res;
    }
    throw new Error("bad response");
  } catch (err) {
    const url = new URL(req.url);
    const key = url.pathname.endsWith("display.html") ? "display.html" : "index.html";
    return (await cache.match(key)) || (await cache.match("./")) || Response.error();
  }
}

// それ以外：保存版をすぐ返し、裏で更新（保存版がなければ通信）
async function assetRequest(req) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(req);
  const net = fetch(req).then(res => {
    if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone());
    return res;
  }).catch(() => null);
  return hit || (await net) || Response.error();
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  const isFont = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (!sameOrigin && !isFont) return;
  if (req.mode === "navigate" && sameOrigin) { e.respondWith(pageRequest(req)); return; }
  e.respondWith(assetRequest(req));
});
