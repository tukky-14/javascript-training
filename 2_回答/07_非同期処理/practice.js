// ### 問題1:setTimeout
// setTimeout関数を使って、3秒後にコンソールにHelloと表示する関数を作成してください。

setTimeout(() => {
    console.log('Hello');
}, 3000);

// ### 問題2:fetch
// fetchを使って、以下のAPIを叩いて、コンソールに表示してください。
// https://jsonplaceholder.typicode.com/posts/1

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((data) => console.log(data));

// ■ async/awaitを使用するバージョン
// const result = await fetch('https://jsonplaceholder.typicode.com/posts/1');
// const data = await result.json();
// console.log(data);
