/**ーーーーーーーーーーーーーーーーーーーー
 * 反復処理
ーーーーーーーーーーーーーーーーーーーーー*/
const animals = ['dog', 'cat', 'rabbit'];
// for
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// for of
animals.forEach((animal) => console.log(animal));
for (const animal of animals) {
    console.log(animal);
}

// forEach
animals.forEach((animal) => console.log(animal));

// while文
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}
