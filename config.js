// スタンプラリー設定（教室名・係用番号のハッシュ・QR用の秘密鍵）
// k を変えると、それまでのQRは使えなくなります
window.RALLY={
  salt:"bunkasai-2026",
  step:30,            // QRが切り替わる秒数
  reveal:20,          // 教室の画面でQRを表示しておく秒数（係が「QRを表示する」を押してから）
  accept:3,           // 何世代前のQRまで受け付けるか（3なら約90秒）
  desk:{id:"desk",name:"受付",h:"f8dc3b9358e718a034600140a0f51dadcd67e837fc00373bf957bf0f71d04eef"},
  spots:[{"id": 1,"name": "1A","h": "4a1edd961321aa59a062de77ae94c38d6fd04551343b48e669c6160c18e9cca3","k": "0835a258ff9096443608865efb6183b4"},{"id": 2,"name": "1B","h": "729ee5b1aa44223354575da3ed65b2f1a922370a486b95dc3b3599cc2fd572d1","k": "5a240cdb611ded25cab54007cc24a301"},{"id": 3,"name": "1C","h": "f81e0364073ebda664c6c0516cbefc1d9cd8a36067220a753787f7842a1a6d86","k": "982177e1050555cde707f4449e6d3dd4"},{"id": 4,"name": "2M","h": "149f6742c7189ddf54dbbb04ed09d719ffafcb4128354159a52aaa75c5340a1e","k": "d33ff032424061369b12cbe382ec95e0"},{"id": 5,"name": "2E","h": "082815e9cc21e41fdb945572737844a944ac4b7701c56d82198e867f6fc893cb","k": "4dde34c2b9fd5cd30ac431badc233a7d"},{"id": 6,"name": "2R","h": "b5f6dd185a13e39f086b6cf24e989afde74c8d1dc56207c276ac9abe6b909a78","k": "0c62ef86411f44ce6fb8f4423a488cab"},{"id": 11,"name": "4MB","h": "ea0e39caa118fc749bc28e74d170eee5e077209ff28fbb8ad1383df2aea74f29","k": "900a0b91e5a618e4c6e2c2cd0e979ba8"},{"id": 14,"name": "工業科展示","h": "9826672dc9a46a8c8282a809f1f308702e80281e013991fc0e5848b6a5eaad16","k": "05a6fd2fddbdf7ebac3db678c27408b7"},{"id": 15,"name": "1年学年展示","h": "15f986f570deaa2dbc56623f8d654d33917dec67c61fcacad676486ed903802c","k": "40d2bbf99fdc975aad32ea2bf50c81c4"}]
};
RALLY.sha256=async s=>{const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")};
RALLY.win=(t=Date.now())=>Math.floor(t/1000/RALLY.step);
RALLY.code=async(spot,w)=>(await RALLY.sha256(spot.k+":"+w)).slice(0,10);
RALLY.checkPin=async(spot,p)=>(await RALLY.sha256(RALLY.salt+":"+spot.id+":"+p))===spot.h;
