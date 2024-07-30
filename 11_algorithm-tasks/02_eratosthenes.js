// ### エラトステネスの篩
// 1. 以下のようなエラトステネスの篩を実装する関数 sieve を実装してください
// 2. 関数 sieve は、引数 n に正の整数を受け取り、n 以下の全ての素数を配列で返します
// 3. 配列の要素は昇順に並びます
// 4. 素数が存在しない場合は空の配列を返します
const n = 100;
const sieve = (n) => {
    const primes = [];
    const isPrime = Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i);
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    return primes;
};
console.log(sieve(n));
