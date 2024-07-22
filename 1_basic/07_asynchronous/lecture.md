### 非同期処理とは？

-   非同期処理は、長時間かかる操作（例えば、ネットワークリクエストやファイルの読み書き）を待つことなく、他の操作を続行できる仕組み
-   アプリケーションの応答性を向上させる

<br/>

### コールバック関数

非同期処理の基本的な方法はコールバック関数を使うこと

```javascript
console.log('Start');

setTimeout(() => {
    console.log('This is a callback function');
}, 2000);

console.log('End');
```

このコードは、`setTimeout`を使って 2 秒後にコールバック関数を実行する。結果は次のようになる：

```
Start
End
This is a callback function
```

<br/>

### Promise

コールバック関数はネストが深くなると管理が難しくなることがあるため、Promise を使うことで非同期処理をより簡単に管理する。

```javascript
const asyncTask = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task completed');
        }, 2000);
    });
};

asyncTask().then((message) => {
    console.log(message);
});
```

このコードは、`asyncTask`関数が Promise を返し、2 秒後に`resolve`される。`then`メソッドで Promise が解決されたときの処理を指定する。

<br/>

### async/await

`async`と`await`は、Promise をもっと簡単に扱うための構文。`async`関数は常に Promise を返し、`await`は Promise が解決されるまで待つ。

```javascript
const asyncTask = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task completed');
        }, 2000);
    });
};

const run = async () => {
    console.log('Start');
    const message = await asyncTask();
    console.log(message);
    console.log('End');
};

run();
```

このコードは、`asyncTask`を非同期で呼び出し、結果が返るまで待つ。結果は次のようになる：

```
Start
Task completed
End
```

<br/>

### 実際の例

以下に、HTTP リクエストを使った非同期処理の例を示す。

```javascript
const fetchData = async () => {
    try {
        const response = await fetch('https://xxxxxx');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
};

fetchData();
```

この例では、`fetch`関数を使ってデータを取得し、そのデータをコンソールに表示する。`await`を使うことで、`fetch`が完了するまで待ち、次の行の処理が実行される。

<br/>

### まとめ

-   非同期処理は、時間のかかる操作を待つことなく他の操作を続行するための仕組み。
-   コールバック関数、Promise、そして`async`/`await`を使って非同期処理を扱える。
-   `async`関数は Promise を返し、`await`を使って Promise が解決されるまで待つ。

<br/>

### 発展知識

-   同期処理：各操作は前の操作が完了するまで待つ処理。いわゆる、順次処理。
-   非同期処理：長時間かかる操作を実行している間に他の操作を続行するための仕組み

JavaScript の非同期処理はイベントループによって管理されている。イベントループは、コールスタック（同期的に実行されるコードのスタック）とタスクキュー（非同期的に実行されるコールバック関数のキュー）を使って、非同期処理を実現している。

1. コールスタック：現在実行中の関数やスクリプトが積み重なっているスタック。
2. タスクキュー：非同期処理が完了したときに実行されるコールバック関数が待機しているキュー。

非同期処理が完了すると、そのコールバック関数がタスクキューに追加される。コールスタックが空になると、イベントループがタスクキューから次のコールバック関数を取り出し、コールスタックに積んで実行する。

時間のかかる処理が実行されている間も 画面がフリーズすることなく UI 面の体験を向上させるために非同期処理は存在している。ただし、時間のかかる処理を待ってから処理したいこともあるため、そのために「コールバック関数」「Promise」「async/await」を使用する。中でも、「async/await」 は、非同期処理を同期処理のように書くことができる構文。これにより、可読性が飛躍的に向上する。
