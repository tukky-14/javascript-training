### try-catch の考え方

1. try ブロック: エラーが起きるかもしれないコードをここに書く。エラーが発生すると、エラーの処理は次の catch ブロックに移る。
2. catch ブロック: try ブロックでエラーが発生したとき、そのエラーをどうするかを書く。例えば、エラーメッセージを表示したり、エラーを修正するための処理を書く。

```javascript
try {
    // ここにエラーが起きるかもしれないコードを書く
    console.log(hoge);
} catch (error) {
    // エラーが発生したときの処理を書く
    console.log('エラーが発生しました: ' + error.message);
}
```

<br/>

### エラーオブジェクトのプロパティ

1. message: エラーの説明を含む文字列。例えば、「xxx is not defined」といったメッセージが入る。
2. name: エラーの種類を示す名前が入る。例えば、「TypeError」や「ReferenceError」など。
3. stack: エラーが発生した場所のスタックトレース（エラーが発生するまでのコードの履歴）を含む文字列。デバッグに役立つ情報が入っている。

```javascript
try {
    // 何らかのエラーが発生する可能性のあるコード
} catch (error) {
    // エラーの詳細をログに記録する
    console.error('エラーが発生しました:');
    console.error('メッセージ:', error.message);
    console.error('名前:', error.name);
    console.error('スタックトレース:', error.stack);
}
```

```javascript
try {
    // 何らかのエラーが発生する可能性のあるコード
} catch (error) {
    // エラーログを外部サービスに送信する例
    sendErrorToService({
        message: error.message,
        name: error.name,
        stack: error.stack,
    });
}

function sendErrorToService(errorData) {
    // ここにエラーデータを外部サービスに送信するコードを書く
    // 例えば、HTTPリクエストで送信するなど
}
```

```javascript
try {
    // 何らかのエラーが発生する可能性のあるコード
} catch (error) {
    const errorLog = {
        message: error.message,
        name: error.name,
        stack: error.stack,
        timestamp: new Date().toISOString(),
    };
    console.error(JSON.stringify(errorLog, null, 2));
}
```
