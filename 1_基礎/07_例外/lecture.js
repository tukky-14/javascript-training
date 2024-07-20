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
