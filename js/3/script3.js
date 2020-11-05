// Task 1

// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль


// let user = {
//     name: 'Roni',
//     old: 4,
//     color: 'white',
// }
//
// let user1 = {
//     name: "Jon",
//     age: 67,
//     weight: 100,
// }
//
// let user2 = {
//     marka: "opel",
//     weight: 2000,
//     color: "black",
// }

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

// let user3 = {
//     location: "center",
//     rooms: "two",
//     fon: "white",
// }
//
// let user4 = {
//     name: "book",
//     pages: 203,
//     color: "grey",
// }

// 2
// let dogs = ["Roni","Moni","Honi","Tobi","Poli"];
// let people = ["Mani","Moly","Keri","Leni","Alina"];
// let cars = ["Opel","Audi","Reno","Fiat","Volvo"];
// console.log(dogs, people, cars);

// 3
// let home = {
//     location: ['Ukraine','Kiev'],
//     place: 'center',
//     room: 4,
//     floor: 4,
//     table:{
//         age:3,
//         condition:'new'
//     }
// }
//
// let  driver = {
//     name: "Andrii",
//     age: 30,
//     pets: false,
//     frends: {
//         is: "Grisha",
//         and: "Vitaliy",
//     },
//     Live: ["Ukraine","IF","Solotvin"],
// }
//
// let toy = {
//     width: "plastik",
//     made: "UA",
//     color: "red",
//     size: ["20","18"],
//     animal: true
// }

// let table = {
//     materials: "woods",
//     legs: 6,
//     conditio: {
//         object: "big",
//     },
//     color: ["black", "white"],
//     broke: true
// }

// let bag = {
//     is: "black",
//     rucku: 2,
//     sixe: ["40","50"],
//     inside: "big",
//     have: "key",
// }

// 4
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];

// - 1. статус Андрія

// for(let user of users) {
//     if(user.name == 'andrey') {
//         console.log(users[7].status);
//     }
// }
//
// 2. Статус Максима

// for(let users of users) {
//     if(users.name == 'max') {
//         console.log(users[5].status);
//     }
// }

// 3. Імя передостаннього обєкту
//         console.log(users[9].name);

// 4. Імя третього обєкту

// console.log(users[2]["name"]);
//
// 5. Вік Олега
// for (let user of users) {
//     if(users.name == "oleg") {
//         console.log(user.age);
//     }
// }
//
// 6. Вік Олі
// for (let user of users) {
//     if (user.name == "olya") {
//         console.log(user.age);
//     }
// }
//
// 7. Вік + імя пятого обєкта

// console.log(users[4]["name"]);
// console.log(users[4]["age"]);

// 8. Вік + статус Анни
// for (let user of users) {
//     if (user.name == "olya") {
//         console.log(user["age"]);
//         console.log(user["status"]);
//     }
// }

// **************************************** DOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM*******************************************

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// 1. отримує текст з параграфа з id "content"

// let elem = document.getElementById("contnet");
// console.log(elem);

// 2. отримує текст з блоку з id "rules"

// let elem = document.getElementById("rules");
// console.log(elem);

// 3. замініть текст параграфа з id 'content' на будь-який інший

// let elem = document.getElementById("content");
// elem.innerText = "Hello world";

// 4. - замініть текст параграфа з id 'rules' на будь-який інший

// let elem = document.getElementById("rules");
// elem.innerText = "Hello World";

// 5. - змініть кожному елементу колір фону на червоний

// let elem1 = document.getElementById("content");
// elem1.style.backgroundColor = "red";
// let elem2 = document.getElementById("rules");
// elem2.style.backgroundColor = "red";

// 6. - змініть кожному елементу колір тексту на синій

//  let elem3 = document.getElementById("content");
//  elem3.style.backgroundColor = "blue";
//  let elem4 = document.getElementById("rules");
//  elem4.style.backgroundColor = "blue";

// 7. - отримати весь список класів елемента з id=rules і вивести їх в console.log

// let elem = document.getElementById("rules");
// console.log(elem.className);

// 8. - отримати всі елементи з класом fc_rules

// let elem = document.getElementsByClassName("fc_rules");
// console.log(elem);

// 9. - поміняти колір тексту у всіх елементів fc_rules на червоний
//
// let elem1 = document.getElementsByClassName("fc_rules");
//
// for(let elem of elem1) {
//     elem.style.color = "blue";
// }