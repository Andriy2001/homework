// - створити функцію яка виводить масив

// function func (arr) {
//     console.log(arr)
// }
// func([1, 2, 3, 4, 5]);

// створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// let arr = [];
// function func(num) {
//     for (i = 0; i < num; i++) {
//         arr.push(Math.round(Math.random()*100));
//     }
//     return arr;
// }
// let result = (func(10));
// console.log(result);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

// function func (num1, num2, num3) {
//     return Math.min(num1, num2, num3);
// }
// console.log(func(2,5,7));

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// function func (num1, num2, num3) {
//     return Math.max(num1 ,num2, num3);
// }
// console.log(func(2,5,7));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function getMax(arr) {
//     alert(Math.max(...arr));
//     return Math.min(...arr);
// }
//
// console.log(getMax([1, 2, 3]))

// - створити функцію яка виводить масив
//
// function printArray  (mus) {
//     console.log(mus);
// }
// printArray([1, 2, 3, 4, 5]);

// - створити функцію яка повертає найбільше число з масиву
//
// function getMax(mus) {
//     return Math.max(...mus);
// }
// console.log(getMax([1, 2, 3, 4, 5]))


// function func(arr) {
//         return Math.min (...arr);
// }
// console.log(func([6, 7, 1, 3, ]));


// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// function func(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]
//     }
//     return sum;
// }
//
// console.log(func([1, 2, 3, 2, 1]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function func(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array [1];
//     }
//     return sum / array.length;
// }

// console.log(func([54, 54, 54, 20, 20]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві


// function func(array) {
//     return array.length;
// }
//
// console.log(func([123, '123',{name:'da', age: 12}, false, {num:123},{name:'dada'},true,{age:21}, [123]]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

// function funce(array) {
//     let sum = 0;
//     for (let i of array) {
//         if (typeof i === 'object' && !Array.isArray(i)) {
//             for (let obj in i) {
//                 sum++;
//             }
//         }
//     }
//     return sum;
// }
//
// console.log(funce([123, '123', {name: 'da', age: 12}, false, {
//     num: 123,
//     fa: 21
// }, {name: 'dada'}, true, {age: 21}, [123]]));

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// function func (array1, array2) {
//     let sum = [];
//     if (array1.length === array2.length) {
//         for (let i = 0; i < array2.length; i++) {
//             sum[i] = array1[i] + array2[i];
//         }
//     }
//     else console.log('not wromg masiv')
//     return sum;
// }
//
// console.log(func([3,3,4,5],[2,3,4,5]));


// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// let changePosition = (array1, k) => {
//     let temp = array1[k];
//     array1[k] = array1[k + 1];
//     array1[k+1] = temp;
//     return array1;
// }
// console.log(changePosition([1, 2, 3, 4, 5, 7], 0));


// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// function type(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.indexOf(0) !== -1) {
//             let b = arr.splice(arr.indexOf(0), 1);
//             arr.push(b[0]);
//         }
//     }
//     return arr;
// }
//
// console.log(type([1, 2, 3, 0, 4, 5, 0, 0]));


// Створити функцію яка :
//     - Додає в боді блок з текстом "Hello owu"

// function argum() {
//     let element = document.createElement('div')
//     document.body.appendChild(element);
//     element.innerText = "Hello own";
// }
//
// argum()
//

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function funce(type, text) {
//     let str = document.createElement(type);
//     let body = document.querySelector('body');
//     body.appendChild(str);
//     str.innerText = text;
// }
// funce('h1', 'hello world!');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// let cars = [{
//         model: "Ferrari1",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari2",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari3",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari4",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari5",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari6",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari7",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari8",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari9",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// },{
//     model: "Ferrari10",
//     year: 2000,
//     power: "200 horse powers",
//     color: "white"
// }];
//
// let addAutoTold = (cars, elementID) => {
//     let element = document.getElementById(elementID);
//     for (let car of cars) {
//         let carObject = document.createElement('div');
//         for (let key of Object.keys(car)) {
//             carObject.innerHTMl += '${key} - ${car[key]}<br>';
//         }
//         element.appendChild(carObject);
//     }
// }
//
// let addAutoToldWithBlock = (cars, elementID) => {
//     let element = document.getElementById(elementID);
//     for (let car of cars) {
//         let carObject = document.createElement('div');
//         for (let key of Object.keys(car)) {
//             let carKey = document.createElement('div');
//             carKey.innerText = "${key} = ${car[key]}";
//             carObject.appendChild(carKey);
//         }
//         element.appendChild(carObject);
//     }
//     document.body.appendChild(element);
// }
// addAutoToldWithBlock(cars, "auto-task");

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.

// let userWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: "petya", age: 30, status: true}, {
//     id: 3,
//     name: 'kolya',
//     age: 29,
//     status: true
// }, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {
//     user_id: 1,
//     country: 'Ukraine',
//     city: 'Ternopil'
// }, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
//
// function funk(array1, array2) {
//     let users = JSON.parse(JSON.stringify(array1));
//     let cities = JSON.parse(JSON.stringify(array2));
//
//     for (const user of users) {
//         for (const city of cities) {
//             if (city.user_id === user.id) {
//                 user.address = city
//             }
//         }
//     }
//     return users
// }
//
// console.log(funk(userWithId, citiesWithId));

