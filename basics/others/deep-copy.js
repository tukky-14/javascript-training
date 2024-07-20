// ーーーーーーーーーーーーーーーーーーーー
// シャローコピーのサンプル
// ーーーーーーーーーーーーーーーーーーーー

const original1 = {
    name: 'John',
    age: 30,
    details: {
        hobby: 'Reading',
        city: 'New York',
    },
};

const shallowCopy = Object.assign({}, original1);

shallowCopy.name = 'Jane'; // 基本的なプロパティはコピーされる
shallowCopy.details.city = 'Los Angeles'; // ネストされたオブジェクトは参照が共有される

console.log(original1.details.city); // "Los Angeles" が出力される

// ーーーーーーーーーーーーーーーーーーーー
// ディープコピーのサンプル
// ーーーーーーーーーーーーーーーーーーーー
const original = {
    name: 'John',
    age: 30,
    details: {
        hobby: 'Reading',
        city: 'New York',
    },
};

const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.details.city = 'Los Angeles'; // ネストされたオブジェクトもコピーされる

console.log(original.details.city); // "New York" が出力される
