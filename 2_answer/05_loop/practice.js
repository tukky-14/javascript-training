// ### 問題1: FizzBuzz
// 1から100までの数値をコンソールに表示させてください。ただし、3の倍数のときは「Fizz」、5の倍数のときは「Buzz」、3と5の両方の倍数のときは「FizzBuzz」と表示させてください。

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

// ### 問題2: 配列の要素の合計
// 数値が格納された配列があります。その配列の全ての要素の合計を計算し、結果をコンソールに表示させてください。
const numbers1 = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

// ### 問題3: 配列の要素の並び替え
// 数値が格納された配列があります。その配列を昇順に並び替え、結果をコンソールに表示させてください。
const numbers2 = [5, 2, 9, 1, 5, 6];
numbers.sort((a, b) => a - b);
console.log(numbers);
