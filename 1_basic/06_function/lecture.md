### 関数

```javascript
// 一般的な関数
function calcNum1() {
    const num1 = 1;
    const num2 = 3;
    console.log(num1 + num2);
}

// アロー関数
const calcNum2 = () => {
    const num1 = 1;
    const num2 = 3;
    console.log(num1 + num2);
};

// アロー関数（引数あり）
const calcNum3 = (num1, num2) => {
    console.log(num1 + num2);
};

calcNum1();
calcNum2();
calcNum3(1, 3);
```

<br/>

### 文字列メソッド

```javascript
const str = 'apple,banana,orange';
// split
const result = str.split(',');
// join
const result = result.join(',');
// replace
const result = str.replace('apple', 'banana');
// includes
const result = str.includes('apple');
// indexOf
const result = str.indexOf('apple');
// slice
const result = str.slice(0, 5);
// toUpperCase
const result = str.toUpperCase();
// toLowerCase
const result = str.toLowerCase();
```

<br/>

### 配列メソッド

```javascript
const fruits = ['apple', 'banana', 'orange'];
// find
const result = fruits.find((fruit) => fruit === 'banana');
// map
const result = fruits.map((fruit) => fruit + 'good');
// filter
const result = fruits.filter((fruit) => fruit === 'banana');
// reduce
const result = fruits.reduce((prev, current) => prev + current);
```
