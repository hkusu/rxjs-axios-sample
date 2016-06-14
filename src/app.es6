const Rx = require('rx'); // RxJS ライブラリの読み込み
const axios = require('axios'); // axios ライブラリの読み込み

// WEB-APIのベースURL(これは axios の機能)
axios.defaults.baseURL = 'http://qiita.com/api/v1';

// Qiita の新着投稿(10件) を取得して Rx のストリームへ流す
function getQiitaItems() {
  // Proimse を Obserbable に変換
  return Rx.Observable.fromPromise(axios.get('/items?per_page=10'));
}

// ストリームを購読
getQiitaItems()
  .subscribe((res) => {
    // 結果(10件)を forEach で順次処理
    res.data.forEach((item) => {
      // コンソールへ出力
      console.log(item.title);
    });
  });
