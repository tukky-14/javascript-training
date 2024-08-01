### 「truthy」 と 「falsy」

JavaScript では、値が「真（true）」または「偽（false）」として扱われるかどうかを判断するために、「truthy（真）」と「falsy（偽）」という概念がある。

-   truthy（真）:
    何かが「truthy」とは、その値が「true」として扱われることを意味する。例えば、「1」「“hello”」「[1, 2]」などは、すべて「truthy」。
-   falsy（偽）:
    何かが「falsy」とは、その値が「false」として扱われることを意味する。例えば、「0」「””（空の文字列）」「null」「undefined」「NaN」などは、すべて「falsy」。

<br/>

##### `truthy`と`falsy`な値の例

| **タイプ** | **値の例**        | **説明**                           |
| ---------- | ----------------- | ---------------------------------- |
| **truthy** | `true`            | 常に「true」として扱われる         |
| **truthy** | `1`               | どんな数値でも、0 以外は「truthy」 |
| **truthy** | `"hello"`         | 空でない文字列は「truthy」         |
| **truthy** | `[1, 2]`          | 空でない配列は「truthy」           |
| **truthy** | `{}`              | 空のオブジェクトは「truthy」       |
| **truthy** | `function() {}`   | 関数は「truthy」                   |
| **falsy**  | `false`           | 常に「false」として扱われる        |
| **falsy**  | `0`               | 数値の 0 は「falsy」               |
| **falsy**  | `""` (空の文字列) | 空の文字列は「falsy」              |
| **falsy**  | `null`            | `null`は「falsy」                  |
| **falsy**  | `undefined`       | `undefined`は「falsy」             |
| **falsy**  | `NaN`             | `NaN`（Not-a-Number）は「falsy」   |

このテーブルでは、`truthy`と`falsy`な値の例を示しています。`truthy`な値は「true」として扱われるもので、`falsy`な値は「false」として扱われます。

<br/>

##### サンプルソース

```javascript
const value = 'Hello';

if (value) {
    console.log('この値はtruthyです。'); // 実行
} else {
    console.log('この値はfalsyです。');
}
```

```javascript
const value = 0;

if (value) {
    console.log('この値はtruthyです。');
} else {
    console.log('この値はfalsyです。'); // 実行
}
```
