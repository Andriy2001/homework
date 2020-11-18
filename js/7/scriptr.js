// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку
// исчезал элемент с id="text".

// let elem = document.querySelector('#text')
// console.log(elem);
//
// let button = document.querySelector('#button');
//
// button.addEventListener('click', function (){
//     elem.style.display = 'none';
// })

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

 // let button1 = document.querySelector('#button');
 // button1.addEventListener('click', function (){
 //     button1.style.display = 'none';
 // })

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let text1 = document.querySelector('#text');
// let button1 = document.querySelector('#button');
//
// button1.addEventListener('click',() => { text.value >= 18? console.log(true) : console.log(false)});
//
// let text = document.querySelector('#text');
// let button = document.querySelector('#button');
//
// button.addEventListener('click', () => {
//     text.classList.toggle('active');
// });

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

// let body = document.querySelector('body')
// let elems = [
//     {title : 'lorem', body: 'lorem ipsum dolo si ameti1'},
//     {title : 'Lorem', body: 'Lorem ipsum dolo si ameti2'},
//     {title : 'Lorem', body: 'Lorem ipsum dolo si ameti3'},
//     {title : 'Lorem', body: 'Lorem ipsum dolo si ameti4'},
//     {title : 'Lorem', body: 'Lorem ipsum dolo si ameti5'},
// ];
//
// for (let elem of elems) {
//     let div = document.createElement('div');
//     div.innerHTML = `${elem.title} ${elem.body}`;
//     div.style.backgroundColor = 'darkolivegreen';
//     div.style.margin = '30px';
//     div.style.color = 'white';
//     div.style.padding = '20px';
//     body.appendChild(div);
//     let button = document.createElement('button');
//     button.setAttribute('value', 'click');
//     button.style.padding = '10px';
//     button.addEventListener('click', () => {
//         div.style.display = 'none';
//     })
//     div.appendChild(button);
// }


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let button = document.querySelector('#input5');
// let elem1 = document.Form1.input1;
// let elem2 = document.Form1.input2;
// let elem3 = document.Form2.input3;
// let elem4 = document.Form2.input4;
//
// button.addEventListener('click', function () {
//     console.log(elem1.value);
// });

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// function  arr(n, m, elem) {
//     let table = document.querySelector(elem);
//
//     for (let i = 0; i < n; i++) {
//         let tr = document.createElement('tr');
//
//         for (let j = 0; j < m.length; j++) {
//             let td = document.createElement('td');
//         td.style.border = '1px solid black';
//         td.style.width = '200px';
//         td.style.height = '50px';
//         td.classList.add('forTd')
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }
// }
// arr(6, 6, '#emptyTable');

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання).

// let n = document.querySelector('#tex1');
// let m = document.querySelector('#text2');
// let text = document.querySelector('#text3');
// let button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//    let table = document.querySelector('#emptyTable');
//
//    for (let j = 0; j < n.value; i++) {
//        let tr = document.querySelector('#emptyTable');
//
//        for (let j = 0; j < m.value; j++) {
//            let td = document.createElement('td');
//            td.innerHTML = text.value;
//            td.style.border = '1px solid black';
//            td.style.width = '200px';
//            td.style.height = '50px';
//            td.classList.add('forTd')
//            tr.appendChild(td);
//        }
//        table.appendChild(td);
//    }
// })

// / - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let img1 = document.querySelector('#img1');
// let img2 = document.querySelector('#img2');
// let img3 = document.querySelector('#img3');
// let img4 = document.querySelector('#img4');
// let img5 = document.querySelector('#img5');
// let img6 = document.querySelector('#img6');
// let img7 = document.querySelector('#img7');
// let img8 = document.querySelector('#img8');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');


// button1.addEventListener('click', function () {
//     img1.classList.add('notActive');
//     img5.classList.remove('notActive');
//     img5.classList.add('active');
//     img2.classList.add('notActive');
//     img6.classList.add('notActive');
//     img6.classList.add('active');
// })

// button2.addEventListener('click', function (){
//     img4.classList.add('notActive');
//     img7.classList.remove('notActive')
//     img7.classList.add('active');
//     img3.classList.add('notActive');
//     img8.classList.remove('notActive');
//     img8.classList.add('active');
// })

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let arr = [
//     'сука',
//     'блядь',
//     'нахуй',
//     'єбать',
//     'хуй',
//     'пизда',
//     'піздєц',
//     'жопа',
//     'пиздарики',
// ]
// let elem1 = document.querySelector('#elem');
// let button = document.querySelector('#button');
//
//     button.addEventListener('click', function () {
//         for (let elem of arr) {
//             if(elem1.value === elem) {
//                 alert('Boy, полегше');
//             }
//         }
// })

//Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//     ]
//
// const content = document.getElementById(`content`)
// const userDivka = document.createElement(`div`)
// userDivka.className = `user`
// userDivka.appendChild(rendercontent(usersWithAddress))
//
// const input1 = document.createElement(`input`)
// const input2 = document.createElement(`input`)
// const input3 = document.createElement(`input`)
//
//
// const input1 = document.createElement(`lable`)
// const input2 = document.createElement(`lable`)
// const input3 = document.createElement(`lable`)
//
// const input2 = document.createElement(`button`)
//
// lable1.innerText = `со статусом`
// lable2.innerText = 'старше 29 лет'
// lable3.innerText = `город Киев`
//
// button.innerText = `Filter!`
//
// input1.type = `checkbox`
// input2.type = `checkbox`
// input3.type = `checkbox`
//
// content.appendChild(userDivka)
//
// content.appendChild(lable1)
// content.appendChild(input1)
// content.appendChild(lable2)
// content.appendChild(input2)
// content.appendChild(lable3)
// content.appendChild(input3)
// content.appendChild(button)
//
// button.onclick = ev => {
//     let myArray = JSON.parse(JSON.stringify(usersWithAddress))
//
//     if (input1.checked) myArray = myArray.filter(value => !value.status)
//     if (input2.checked) myArray = myArray.filter(value => value.age >= 29)
//     if (input3.checked) myArray = myArray.filter(value => value.address.city === `Kyiv`)
//
//     userDivka.innerHTML = ``;
//     userDivka.appendChild(rendercontent(myArray))
// }
//
// function rendercontent (array) {
//     const main = document.createElement(`div`)
//     array.forEach(item => {
//         const div = document.createElement(`div`)
//         div.innerHTML = document.stringiry(item)
//         main.appendChild(div)
//     })
//     return main;
// }
