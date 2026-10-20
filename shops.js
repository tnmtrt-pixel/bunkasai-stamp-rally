// 出し物紹介のデータ
// 紹介文やメニューが決まったら、それぞれの desc / menu / note を書き換えてください。
//   rally : スタンプラリーの教室名（config.js の名前）。スタンプがない出し物は null
//   cat   : "food"（食べ物） / "play"（遊び） / "show"（展示・ステージ）
//   desc  : 紹介文。空 "" のときは「紹介文は準備中です」と表示
//   menu  : [["品名","値段"], ...]。不要なら []
//   note  : 時間・注意など。不要なら ""
window.SHOPS = [
  {rally:"1A", title:"ストラックアウト・1円玉落とし", by:"1A", at:"2号館3階 2301", cat:"play", desc:"", menu:[], note:""},
  {rally:"1B", title:"スーパーボールすくい・ピンポン玉入れ", by:"1B", at:"2号館3階 2302", cat:"play", desc:"", menu:[], note:""},
  {rally:"1C", title:"射的", by:"1C", at:"2号館3階 2303", cat:"play", desc:"", menu:[], note:""},
  {rally:"2M", title:"面白いゲーム", by:"2M", at:"2号館4階 2402", cat:"play", desc:"", menu:[], note:""},
  {rally:"2E", title:"段ボール迷路喫茶", by:"2E", at:"2号館4階 2403", cat:"play", desc:"", menu:[], note:""},
  {rally:"2R", title:"ガチャガチャの林", by:"2R", at:"2号館4階 2404", cat:"play", desc:"", menu:[], note:""},
  {rally:"3M", title:"フランクフルト", by:"3M", at:"中庭 テント④", cat:"food", desc:"", menu:[], note:""},
  {rally:"3E", title:"わたがし", by:"3E", at:"中庭 テント③", cat:"food", desc:"", menu:[], note:""},
  {rally:"3R", title:"ヤンニョムチキン", by:"3R", at:"中庭 テント③", cat:"food", desc:"", menu:[], note:""},
  {rally:"4MA", title:"たこせん", by:"4MA", at:"中庭 テント①", cat:"food", desc:"", menu:[], note:""},
  {rally:"4MB", title:"パズル", by:"4MB", at:"2号館4階 2401", cat:"play", desc:"", menu:[], note:""},
  {rally:"4E", title:"ホルモンうどん", by:"4E", at:"中庭 テント②", cat:"food", desc:"", menu:[], note:""},
  {rally:"4R", title:"ポップコーン", by:"4R", at:"中庭 テント①", cat:"food", desc:"", menu:[], note:""},
  {rally:"工業科展示", title:"工業科展示", by:"工業科", at:"2号館4階 2406〜07", cat:"show", desc:"", menu:[], note:""},
  {rally:"1年学年展示", title:"1年展示", by:"1年生", at:"2号館3階 2304", cat:"show", desc:"", menu:[], note:""},
  {rally:"3年学年展示", title:"3年学年展示", by:"3年生", at:"中庭 テント④", cat:"show", desc:"", menu:[], note:""},
  {rally:null, title:"生徒会・エンタメ同好会", by:"生徒会・エンタメ同好会", at:"2号館3階 2305", cat:"play", desc:"", menu:[], note:""},
  {rally:null, title:"射的・ダーツ", by:"育友会", at:"中庭 テント⑤", cat:"play", desc:"", menu:[], note:""},
  {rally:null, title:"企業展示", by:"企業", at:"中庭 テント⑥・⑦・⑧", cat:"show", desc:"", menu:[], note:""},
  {rally:null, title:"有志ステージ", by:"有志", at:"メインアリーナ", cat:"show", desc:"有志によるステージです。空いている人はぜひ曲を聴きに来てください。", menu:[], note:""}
];
