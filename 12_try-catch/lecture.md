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

<br/>

### エラーの伝播

親関数から実行した子関数でエラーが発生したとき、キャッチしたエラーを再スローすると親関数の catch ブロックでもそのエラーをキャッチすることができる。

```javascript
async function parentFunction() {
    try {
        await childFunction();
    } catch (error) {
        console.log('Error caught in parentFunction:', error);
    }
}

async function childFunction() {
    try {
        await apiCallFunction();
    } catch (error) {
        console.log('Error caught in childFunction:', error);
        throw error; // エラーを再スローする
    }
}

async function apiCallFunction() {
    // ここでAPI通信を行う
    throw new Error('API call failed'); // 仮のエラー
}

parentFunction();

// Error caught in childFunction: API call failed
// Error caught in parentFunction: API call failed
```

1. apiCallFunction で発生したエラー（new Error('API call failed')）は、まず childFunction の catch ブロックでキャッチされる。
2. childFunction の catch ブロックでエラーメッセージをログに出力した後、そのエラーを throw error で再スローする。
3. 再スローされたエラーは、parentFunction の catch ブロックでキャッチされる。
4. parentFunction の catch ブロックでもエラーメッセージをログに出力する。
