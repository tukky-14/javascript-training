// ### 市松模様
// 1. 以下のような市松模様を作成する関数 checkerboard を実装してください
// 2. 関数 checkerboard は、引数 n に正の整数を受け取り、n x n の市松模様を表す文字列を返します
// 3. 市松模様は、'■' と '　' が交互に並び、各行は改行で区切られます
// 4. 市松模様の左上の文字は '■' です
const n = 10;
const checkerboard = (n) => {
    let board = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            board += (i + j) % 2 === 0 ? '■' : '　';
        }
        board += '\n';
    }
    return board;
};
console.log(checkerboard(n));
