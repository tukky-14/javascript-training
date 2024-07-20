/**ーーーーーーーーーーーーーーーーーーーー
 * 定数・変数
ーーーーーーーーーーーーーーーーーーーーー*/
const test = ''; // 定数（厳密には定数ではないが、定数のようなもの）
let test1 = ''; // 変数
var test2 = ''; // 使用したらあかん！

// test = '1' // ×再代入不可
test1 = '1'; // ●再代入可能

/**ーーーーーーーーーーーーーーーーーーーー
 * データ型
ーーーーーーーーーーーーーーーーーーーーー*/
const string = 'test'; // 文字列
const number = 123; // 数値
const boolean = true; // 真偽値（if文とかに使う）

// 配列
const array = ['apple', 'banana', 'orange'];
// 配列の要素を取得
console.log(array[0]); // apple

// オブジェクト
const object = { id: 1, name: 'akane' };
// オブジェクトのプロパティを取得
console.log(object.id); // 1

// オブジェクト配列
const objArray = [
    { id: 1, name: 'taro' },
    { id: 2, name: 'jiro' },
    { id: 3, name: 'hanako' },
];
// オブジェクト配列の要素を取得
console.log(objArray[0].id); // 1
console.log(objArray[1].name); // jiro

/**ーーーーーーーーーーーーーーーーーーーー
 * 条件式と演算子
ーーーーーーーーーーーーーーーーーーーーー*/
const num = 1;
if (num === 1) {
    console.log('numは1です');
}

const num2 = 2;
if (num2 % 2 === 1) {
    console.log('num2は奇数です');
} else {
    console.log('num2は偶数です');
}

// 三項演算子
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Conditional_operator
num2 % 2 === 1 ? console.log('num2は奇数です') : console.log('num2は偶数です');

/**ーーーーーーーーーーーーーーーーーーーー
 * 繰り返し処理
ーーーーーーーーーーーーーーーーーーーーー*/
const animals = ['dog', 'cat', 'rabbit'];
// for
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// for of
animals.forEach((animal) => console.log(animal));
for (const animal of animals) {
    console.log(animal);
}

// forEach
animals.forEach((animal) => console.log(animal));

// while文
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

/**ーーーーーーーーーーーーーーーーーーーー
 * 関数
ーーーーーーーーーーーーーーーーーーーーー*/
function calcNum() {
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

calcNum();

/**ーーーーーーーーーーーーーーーーーーーー
 * 文字列関数
ーーーーーーーーーーーーーーーーーーーーー*/
// 文字列関数
const str = 'apple,banana,orange';
// split
const result = str.split(',');
// join
const result2 = result.join(',');
// replace
const result3 = str.replace('apple', 'banana');
// includes
const result4 = str.includes('apple');
// indexOf
const result5 = str.indexOf('apple');
// slice
const result6 = str.slice(0, 5);
// toUpperCase
const result7 = str.toUpperCase();
// toLowerCase
const result8 = str.toLowerCase();

/**ーーーーーーーーーーーーーーーーーーーー
 * 配列関数
ーーーーーーーーーーーーーーーーーーーーー*/
const fruits = ['apple', 'banana', 'orange'];
// find
const result9 = fruits.find((fruit) => fruit === 'banana');
// map
const result10 = fruits.map((fruit) => fruit + 'good');
// filter
const result11 = fruits.filter((fruit) => fruit === 'banana');
// reduce
const result12 = fruits.reduce((prev, current) => prev + current);
