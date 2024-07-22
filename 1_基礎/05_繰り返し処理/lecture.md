### 反復処理

```javascript
const animals = ['dog', 'cat', 'rabbit'];
// for（一般的な繰り返し処理）
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// for of（簡潔に書く繰り返し処理）
for (const animal of animals) {
    console.log(animal);
}

// forEach（配列特化の繰り返し処理。途中で終了ができない。）
animals.forEach((animal) => console.log(animal));

// while（繰り返し処理の別の書き方。あまり使用しない。）
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

// for in（オブジェクト配列に対して使用する繰り返し処理）
const object = { id: 1, name: 'taro', age: 20 };
for (key in object) {
    console.log(key);
}
// 下記でも同様の処理が可能
Object.keys(objArray).forEach((key) => {
    console.log(key);
});
```

<br/>

### 参考

-   一般的な for 文が、僅かだが処理速度は一番早い
