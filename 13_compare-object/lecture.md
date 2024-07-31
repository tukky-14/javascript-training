### プリミティブ型とオブジェクト型の違い

##### プリミティブ型

プリミティブ型は基本的なデータ型。
プリミティブ型は変更不可（immutable）であり、値を直接保持する。変数に値を代入すると、その変数は値のコピーを保持する

-   例
    -   undefined
    -   null
    -   boolean (true または false)
    -   number (整数および浮動小数点数)
    -   bigint (非常に大きな整数)
    -   string (文字列)
    -   symbol (ユニークな識別子)
    -   typeof (型の確認)

<br/>

##### オブジェクト型

オブジェクト型は複雑なデータ構造を表すためのもの。
オブジェクト型は変更可能（mutable）で、参照を通じて値にアクセスする。複数のプロパティやメソッドを含むことができる。

-   例
    -   Object (通常のオブジェクト)
    -   Array (配列)
    -   Function (関数)
    -   Date (日付)
    -   RegExp (正規表現)
    -   Map (マップ)
    -   Set (セット)

<br/>

### プリミティブ型とオブジェクト型それぞれの値の比較

##### プリミティブ型同士の比較

プリミティブ型の比較は、値そのものを比較する

```javascript
let a = 10;
let b = 10;
console.log(a === b); // true
```

<br/>

##### オブジェクト型同士の比較

オブジェクト型の比較は、参照（メモリ上の位置）を比較する。つまり、2 つのオブジェクトが同じプロパティや値を持っていても、別々のオブジェクトとして扱われる場合がある。

```javascript
let obj1 = { name: 'Alice' };
let obj2 = { name: 'Alice' };
let obj3 = obj1;

console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false
console.log(obj1 == obj3); // true
console.log(obj1 === obj3); // true
```

<br/>

##### オブジェクト型同士のプロパティを再帰的に比較することで中身を比較する

```javascript
function deepEqual(obj1, obj2) {
    // 同じ参照を指している場合
    if (obj1 === obj2) {
        return true;
    }

    // 型が異なる場合
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    // プロパティの数が異なる場合
    if (keys1.length !== keys2.length) {
        return false;
    }

    // プロパティの値が異なる場合
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

let obj1 = { name: 'Alice', age: 25 };
let obj2 = { name: 'Alice', age: 25 };

console.log(deepEqual(obj1, obj2)); // true
```

```javascript
// 以下でも比較は可能だが、プロパティの順序が異なる場合はtrueにならない
function objectsEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

let obj1 = { name: 'Alice', age: 25 };
let obj2 = { name: 'Alice', age: 25 };

console.log(objectsEqual(obj1, obj2)); // true
```
