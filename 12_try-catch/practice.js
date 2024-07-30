try {
    // ここにエラーが起きるかもしれないコードを書く
    console.log(hoge);
} catch (error) {
    // エラーが発生したときの処理を書く
    console.log('エラーが発生しました: ' + error.message);
}
