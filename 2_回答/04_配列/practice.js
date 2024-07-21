// ### 問題1: 配列
// 果物に関する配列を作成し、その中身をコンソールに表示してください。

const fruits = ['apple', 'banana', 'orange'];
console.log(fruits);

// ### 問題2: 配列の長さ
// 問題1で作成した配列の長さをコンソールに表示してください。

console.log(fruits.length);

// ### 問題3: 配列の追加
// 問題1で作成した配列に、新しい果物を追加してください。その後、配列の中身をコンソールに表示してください。

fruits.push('grape');
console.log(fruits);

// ### 問題4: 配列の削除
// 問題1で作成した配列の最後の要素を削除してください。その後、配列の中身をコンソールに表示してください。

fruits.pop();
console.log(fruits);

// ### 問題5: 配列の結合
// 以下の2つの配列を結合して、新しい配列を作成し、コンソールに表示してください。

const fruits2 = ['peach', 'kiwi'];
const newFruits = fruits.concat(fruits2);

// 以下スプレッド構文でも可能
// const newFruits = [...fruits, ...fruits2];
