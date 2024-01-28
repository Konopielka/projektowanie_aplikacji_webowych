let numericArray = [1, 2, 3];
let textArray = ['one', 'two', 'three'];
let booleanArray = [true, false, true];
let mixArray = [1, 'two', false];

console.log('Tablica numericArray');
console.log(numericArray)

console.log('Tablica textArray');
console.log(textArray);

console.log('Tablica booleanArray');
console.log(booleanArray)

console.log('Tablica mixArray');
console.log(mixArray)

console.log('--------------------');

console.log('trzeci element z tablicy textarray');
console.log(textArray[2]);

console.log('drugi el z tablicy numericArray');
let n = numericArray[1];
console.log(n);

console.log('Tablica numericArray po modyfikacji drugiego elementu');
numericArray[1] = 100;
console.log(numericArray);

console.log('Element z tablicy numericArray spoza zakresu');
console.log(numericArray[-1]);

console.log('czy tablica numericArray zawiera cyfrę 1 ')
console.log(numericArray.includes(1));

console.log('czy tablica numericArray zawiera cyfrę 4')
console.log(numericArray.includes(4));

console.log('--------------------');

console.log('tablica textArray po dodaniu wartości four');
textArray.push('four');
console.log(textArray)

console.log('--------------------');
console.log('typ zmiennej ktora przechowuje tablicę');
console.log(typeof textArray);

console.log('długosc tabl');
console.log(textArray.length);