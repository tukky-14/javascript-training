// ### 問題1: 関数の定義と呼び出し
// 2つの数値を引数として受け取り、それらの和を返す関数を定義します。定義した関数を使用して、2つの数値の和をコンソールに表示させてください。

function add(num1, num2) {
    return num1 + num2;
}
const result = add(10, 5);
console.log(result);

// ### 問題2: 関数
// 3つの数値を引数として受け取り、最大値を返す関数を定義します。定義した関数を使用して、3つの数値の最大値をコンソールに表示させてください。

function max(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
const result2 = max(10, 5, 8);
console.log(result2);
