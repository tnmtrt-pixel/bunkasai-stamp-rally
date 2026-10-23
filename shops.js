// 出し物紹介のデータ（パンフレットの「出し物」と「マップ」に使います）
// 紹介文やメニューが決まったら、それぞれの desc / menu / note を書き換えてください。
//   rally : スタンプラリーの教室名（config.js の名前）。スタンプがない出し物は null
//   cat   : "food"（食べ物） / "play"（遊び） / "show"（展示・ステージ） / "info"（案内）
//   desc  : 紹介文。空 "" のときは「紹介文は準備中です」と表示
//   menu  : [["品名","値段"], ...]。不要なら []
//   note  : 時間・注意など。不要なら ""
//   x, y  : 会場マップ上の位置（画像の左上からの%）
window.SHOPS = [
  {rally:null, title:"文化祭本部", by:"生徒会・エンタメ同好会", at:"2号館3階 2305", cat:"info", desc:"生徒会が運営する紅華祭の本部です。道に迷ったとき、落とし物や忘れ物、気分が悪くなったときなど、困ったことがあれば気軽に声をかけてください。\nスタンプラリーの景品もここで受け取れます。教室の9か所のスタンプをすべて集めたら、スタンプの画面を見せてください。", menu:[], note:"エンタメ同好会も同じ教室で出し物をしています。", x:77.5, y:14.8},
  {rally:"1A", title:"ストラックアウト・1円玉落とし", by:"1A", at:"2号館3階 2301", cat:"play", desc:"", menu:[], note:"", x:23.8, y:14.8},
  {rally:"1B", title:"スーパーボールすくい・ピンポン玉入れ", by:"1B", at:"2号館3階 2302", cat:"play", desc:"", menu:[], note:"", x:37.1, y:14.8},
  {rally:"1C", title:"射的", by:"1C", at:"2号館3階 2303", cat:"play", desc:"", menu:[], note:"", x:50.3, y:14.8},
  {rally:"2M", title:"面白いゲーム", by:"2M", at:"2号館4階 2402", cat:"play", desc:"", menu:[], note:"", x:37.1, y:7.0},
  {rally:"2E", title:"段ボール迷路喫茶", by:"2E", at:"2号館4階 2403", cat:"play", desc:"", menu:[], note:"", x:50.3, y:7.0},
  {rally:"2R", title:"ガチャガチャの林・ドローン操作体験", by:"2R", at:"2号館4階 2404", cat:"play", desc:"3Dプリンターで印刷したパーツを、クラスのみんなで組み立てたガチャガチャが並ぶ「ガチャガチャの林」。景品には、ここでしか手に入らない限定グッズも入っています。何が出るかはお楽しみに！\nさらに、ロボティクスコースの実習で使っているドローンを実際に操縦できる「ドローン操作体験」も。体験した人には、ガチャガチャに使えるコインを1枚プレゼントします。ドローンを飛ばして、ガチャも回そう！", menu:[["ガチャガチャ（1回）","200円"],["ドローン操作体験（約5分）","300円"]], note:"ドローン操作体験は当日先着の予約制です。", x:63.6, y:7.0},
  {rally:null, title:"フランクフルト", by:"3M", at:"中庭 テント④", cat:"food", desc:"", menu:[], note:"", x:26.2, y:60.6},
  {rally:null, title:"わたがし", by:"3E", at:"中庭 テント③", cat:"food", desc:"", menu:[], note:"", x:39.1, y:60.4},
  {rally:null, title:"ヤンニョムチキン", by:"3R", at:"中庭 テント③", cat:"food", desc:"", menu:[], note:"", x:46.4, y:60.4},
  {rally:null, title:"たこせん", by:"4MA", at:"中庭 テント①", cat:"food", desc:"", menu:[], note:"", x:46.1, y:38.7},
  {rally:"4MB", title:"パズル", by:"4MB", at:"2号館4階 2401", cat:"play", desc:"", menu:[], note:"", x:23.8, y:7.0},
  {rally:null, title:"ホルモンうどん", by:"4E", at:"中庭 テント②", cat:"food", desc:"", menu:[], note:"", x:60.7, y:38.7},
  {rally:null, title:"ポップコーン", by:"4R", at:"中庭 テント①", cat:"food", desc:"", menu:[], note:"", x:39.1, y:38.7},
  {rally:"工業科展示", title:"工業科展示", by:"工業科", at:"2号館4階 2406〜07", cat:"show", desc:"", menu:[], note:"", x:77.7, y:7.0},
  {rally:"1年学年展示", title:"1年展示", by:"1年生", at:"2号館3階 2304", cat:"show", desc:"", menu:[], note:"", x:63.6, y:14.8},
  {rally:null, title:"3年学年展示", by:"3年生", at:"中庭 テント④", cat:"show", desc:"", menu:[], note:"", x:19.0, y:60.6},
  {rally:null, title:"射的・ダーツ", by:"育友会", at:"中庭 テント⑤", cat:"play", desc:"", menu:[], note:"", x:24.1, y:39.7},
  {rally:null, title:"企業展示", by:"企業", at:"中庭 テント⑥・⑦・⑧", cat:"show", desc:"", menu:[], note:"", x:63.7, y:61.0},
  {rally:null, title:"有志ステージ", by:"有志", at:"メインアリーナ", cat:"show", desc:"有志によるステージです。空いている人はぜひ曲を聴きに来てください。", menu:[], note:"", x:32.4, y:92.8}
];
