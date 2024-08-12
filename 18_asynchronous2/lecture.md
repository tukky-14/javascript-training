# JavaScript で`Promise`に関連して使用できる主なメソッド

### 1. `Promise.all(iterable)`

-   **説明**: 渡されたすべての`Promise`が解決されるのを待ち、すべてが成功した場合に一つの`Promise`を返します。もし一つでも失敗した場合、最初に失敗した`Promise`のエラーを返します。
-   **例**:

    ```javascript
    const promise1 = Promise.resolve(3);
    const promise2 = 42;
    const promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'foo');
    });

    Promise.all([promise1, promise2, promise3]).then((values) => {
        console.log(values); // [3, 42, "foo"]
    });
    ```

### 2. `Promise.race(iterable)`

-   **説明**: 渡された`Promise`の中で、最初に解決または拒否されたものを返します。
-   **例**:

    ```javascript
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 500, 'one');
    });

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'two');
    });

    Promise.race([promise1, promise2]).then((value) => {
        console.log(value); // "two" が表示される
    });
    ```

### 3. `Promise.allSettled(iterable)`

-   **説明**: 渡されたすべての`Promise`が完了するのを待ちます（成功か失敗かは問わない）。完了したすべての`Promise`の結果を配列で返します。
-   **例**:

    ```javascript
    const promise1 = Promise.resolve('成功');
    const promise2 = Promise.reject('失敗');

    Promise.allSettled([promise1, promise2]).then((results) => {
        results.forEach((result) => console.log(result.status));
    });
    // "fulfilled", "rejected" が表示される
    ```

### 4. `Promise.any(iterable)`

-   **説明**: 渡された`Promise`の中で、最初に成功したものを返します。全ての`Promise`が失敗した場合、`AggregateError`を投げます。
-   **例**:

    ```javascript
    const promise1 = Promise.reject('エラー1');
    const promise2 = Promise.reject('エラー2');
    const promise3 = Promise.resolve('成功');

    Promise.any([promise1, promise2, promise3]).then((value) => {
        console.log(value); // "成功" が表示される
    });
    ```

### 5. `Promise.resolve(value)`

-   **説明**: 引数として与えられた値で解決される`Promise`を返します。もしその値が`Promise`であれば、そのまま返されます。
-   **例**:
    ```javascript
    Promise.resolve('foo').then((value) => {
        console.log(value); // "foo" が表示される
    });
    ```

### 6. `Promise.reject(reason)`

-   **説明**: 与えられた理由で拒否される`Promise`を返します。
-   **例**:
    ```javascript
    Promise.reject('エラーが発生').catch((error) => {
        console.log(error); // "エラーが発生" が表示される
    });
    ```
