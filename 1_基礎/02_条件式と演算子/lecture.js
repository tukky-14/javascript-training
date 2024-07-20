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
