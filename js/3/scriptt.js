// Task2

// создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let user1= {
//  name: `Andrii`,
//  age: 19,
//  hascar: false
// };
//
// let user2= {
//     name: "Roni",
//     animale: true,
//     age: 4,
// }

// let user3= {
//     name: "Ivan",
//     city: "kiev",
//     hasdog: false,
// }

// let user4= {
//     study: true,
//     work: false,
//     age: 20,
// }

// let user5= {
//     name: "Tonik",
//     city: "IF",
//     car: 2,
// }

// //- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let user99= {study: ["footbal","tenis"], number: 4, team: "England"};
// let user88= {work: ["table","chairse"], skills: false, man: "strong"};
// let user77= {driving: ["car","bike"], things: true, skill: "nice"};
// let user66= {nik: 'Petia', city: ["Kiev","UA"], status: 'active'};


// - При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for (key in user1){
//     console.log(key)
// }
// for (key in user2){
//     console.log(key)
// }
// for (key in user3){
//     console.log(key)
// }
// for (key in user4){
//     console.log(key)
// }
// for (key in user5){
//     console.log(key)
// }
// for (key in man){
//     console.log(key)
// }
// for (key in user99){
//     console.log(key)
// }
// for (key in user88){
//     console.log(key)
// }
// for (key in user77){
//     console.log(key)
// }
// for (key in user66){
//     console.log(key)
// }

//При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// console.log(Object.keys(man))
// console.log(Object.keys(user1))
// console.log(Object.keys(user2))
// console.log(Object.keys(user3))
// console.log(Object.keys(user4))
// console.log(Object.keys(user5))
// console.log(Object.keys(user99))
// console.log(Object.keys(user88))
// console.log(Object.keys(user77))
// console.log(Object.keys(user66))

// Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

// let arr = [
//     {car: "Opel", power: 400, year: 2005, color: "white"},
//     {car: "Reno", power: 100, year: 2010, color: 'black'},
//     {car: "Fiat", power: 300, year: 2000, color: "red"},
//     {car: "Toto", power: 342, year: 2004, color: "blue"},
//     {car: "Golf", power: 545, year: 1999, color: 'yellow'},
//     {car: "Jeep", power: 999, year: 2019, color: "black"},
//     {car: "Lincoln", power: 244, year: 2020, color: "red"},
//     {car: "Passat", power: 100, year: 2012, color: "black"},
//     {car: "BMW", power: 535, year: 2018, color: "green"},
//     {car: "Porsh", power:245, year: 2005, color: "black"},
// ]

//- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.


// let arr = [
//     {car: "Opel", power: 400, year: 2005, color: "white", driver: {name:"Roni", age: 21, is: "man", experience: 3}},
//     {car: "Reno", power: 100, year: 2010, color: 'black', driver: {name:"Ivan", age: 29, is: "man", experience: 5}},
//     {car: "Fiat", power: 300, year: 2000, color: "red", driver: {name:"Bob", age: 45, is: "man", experience: 23}},
//     {car: "Toto", power: 342, year: 2004, color: "blue", driver: {name:"Leni", age: 50, is: "woman", experience: 25}},
//     {car: "Golf", power: 545, year: 1999, color: 'yellow', driver: {name:"Olya", age: 46, is: "woman", experience: 21}},
//     {car: "Jeep", power: 999, year: 2019, color: "black", driver: {name:"Andriy", age: 19, is: "man", experience: 2}},
//     {car: "Lincoln", power: 244, year: 2020, color: "red", driver: {name:"Oleg", age: 41, is: "man", experience: 8}},
//     {car: "Passat", power: 100, year: 2012, color: "black", driver: {name:"Ira", age: 31, is: "woman", experience: 15}},
//     {car: "BMW", power: 535, year: 2018, color: "green", driver: {name: "Tirom", age: 24, is: "man", experience: 5}},
//     {car: "Porsh", power:245, year: 2005, color: "black", driver: {name: "Winona", age: 38, is: "woman", experience: 4}},
// ]

//- проитерировать каждый массив из задания 5,6,7 при помощи while.
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

//  let i = 0;
// while (i<arr.length) {
//     console.log(arr[i]);
//     i++
// }
//
//  for (let j = 0; j < arr.length; j++) {
//      const arrElements = arr[j];
//      console.log(arrElements);
//  }
//
//  for (const arrElements of arr) {
//      console.log(arrElements);
//  }

//- взять объекты из задания 1 и превратить каждый в json.
//- взять json из задания 11 и превратить их обратно в объекты


// let Myjson = JSON.stringify(user1);
// console.log(Myjson);
//
// let Jsonback = JSON.parse(Myjson);
// console.log(Jsonback);

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// for (let i = 0; i < arr.length; i++) {
//     console.log(JSON.stringify(arr[i]));
// }


// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let newArray = [];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     newArray.push(JSON.stringify(arrElement));
// }
// console.log(newArray);


//Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

// let newArr = [];
//
// for (const user of users) {
//     for (const skill of user.skills) {
//         newArr.push(skill);
//     }
// }
// console.log(newArray);

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
// console.log(`${users[4].age} ${users[4].status} `);



//- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let clean = [];
// for (const user of users) {
//     clean.push(user.address)
// }
// console.log(clean);


//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.


// for (let i = 0; i<users.length; i++) {
//     const user = users[i];
//     const div = document.createElement("div");
//     let address = ` `;
//     for (const address1 in user.address) {
//         address = address + ` ` + user.address[address1]
//     }
//     div.innerText = `${user.name}  ${user.age} ${user.status} ${address}`;
//     document.body.appendChild(div);
// }


//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (let i = 0; i<users.length; i++) {
//     const user = users[i];
//     const div = document.createElement("div");
//     const name = document.createElement("h2");
//     const age = document.createElement("p");
//     const status = document.createElement("P");
//     const address = document.createElement("div");
//
//     for (const item in user.address) {
//         const temp = document.createElement("div");
//         temp.innerHTML = user.address[item];
//          address.appendChild(temp);
//     }
//         name.innerText = user.name;
//     age.innerText = user.age;
//     status.innerText = user.status;
//      div.appendChild(name);
//      div.appendChild(age);
//      div.appendChild(status);
//      div.appendChild(address);
//      document.body.appendChild(div);
// }
