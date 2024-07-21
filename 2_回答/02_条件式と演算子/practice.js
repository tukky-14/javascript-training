// ### 問題1: 奇数偶数判定
// 数値を1つ格納した変数が偶数か奇数かを判定し、結果をコンソールに表示させてください。

const num = 10;
if (num % 2 === 0) {
    console.log('偶数');
} else {
    console.log('奇数');
}

// ### 問題2: 条件式
// 成績を数値で格納した変数があります。90以上なら「優秀」、70以上90未満なら「良好」、50以上70未満なら「合格」、それ以下なら「不合格」とコンソールに表示させてください。

const score = 80;
if (score >= 90) {
    console.log('優秀');
} else if (score >= 70) {
    console.log('良好');
} else if (score >= 50) {
    console.log('合格');
} else {
    console.log('不合格');
}
