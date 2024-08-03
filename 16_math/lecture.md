### [Math オブジェクト](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math)

| **カテゴリー** | **関数/プロパティ**   | **説明**                                       |
| -------------- | --------------------- | ---------------------------------------------- |
| **プロパティ** | `Math.E`              | 自然対数の底（約 2.718）                       |
|                | `Math.LN2`            | 2 の自然対数（約 0.693）                       |
|                | `Math.LN10`           | 10 の自然対数（約 2.303）                      |
|                | `Math.LOG2E`          | log2(e)（約 1.443）                            |
|                | `Math.LOG10E`         | log10(e)（約 0.434）                           |
|                | `Math.PI`             | 円周率（約 3.14159）                           |
|                | `Math.SQRT1_2`        | 1/2 の平方根（約 0.707）                       |
|                | `Math.SQRT2`          | 2 の平方根（約 1.414）                         |
| **メソッド**   | `Math.abs(x)`         | x の絶対値を返す                               |
|                | `Math.acos(x)`        | x の逆余弦（ラジアン）                         |
|                | `Math.asin(x)`        | x の逆正弦（ラジアン）                         |
|                | `Math.atan(x)`        | x の逆正接（ラジアン）                         |
|                | `Math.ceil(x)`        | x 以上の最小の整数を返す                       |
|                | `Math.floor(x)`       | x 以下の最大の整数を返す                       |
|                | `Math.round(x)`       | x を四捨五入して整数を返す                     |
|                | `Math.max(...values)` | 引数の中で最大の値を返す                       |
|                | `Math.min(...values)` | 引数の中で最小の値を返す                       |
|                | `Math.random()`       | 0 以上 1 未満のランダムな数を返す              |
|                | `Math.sqrt(x)`        | x の平方根を返す                               |
|                | `Math.pow(x, y)`      | x の y 乗を返す                                |
|                | `Math.sin(x)`         | x の正弦（サイン）を返す（x はラジアン）       |
|                | `Math.cos(x)`         | x の余弦（コサイン）を返す（x はラジアン）     |
|                | `Math.tan(x)`         | x の正接（タンジェント）を返す（x はラジアン） |

<br/>

##### よく使う関数の使用例

```javascript
// Math.abs(x)	x の絶対値を返す
const abs = Math.abs(-1); // 1

// Math.ceil(x)	x 以上の最小の整数を返す
const ceil = Math.ceil(1.1); // 2

// Math.floor(x)	x 以下の最大の整数を返す
const floor = Math.floor(1.9); // 1

// Math.round(x)	x を四捨五入して整数を返す
const round = Math.round(1.5); // 2

// Math.max(...values)	引数の中で最大の値を返す
const max = Math.max(1, 2, 3); // 3

// Math.min(...values)	引数の中で最小の値を返す
const min = Math.min(1, 2, 3); // 1

// Math.random()	0 以上 1 未満のランダムな数を返す
const random = Math.random(); // 0.123456789
```
