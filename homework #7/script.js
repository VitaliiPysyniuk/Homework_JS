// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// Код тут...
// let button1 = document.getElementById('button1');
// button1.onclick = () => {
//     let element = document.getElementById('text');
//     if(element.style.display !== 'none') {
//         element.style.display = 'none';
//         button1.innerText = 'Показати елемент';
//         return ;
//     }
//     element.style.display = 'block';
// };


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// Код тут...
// let button2 = document.getElementById('button2');
// button2.onclick = () => {
//     button2.style.display = 'none';
// }


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// Код тут...
// let mainForm = document.forms.form1;
// let buttonInForm = mainForm.button3;
// buttonInForm.onclick = () => {
//     +mainForm.input1.value < 18 ? alert('You are a child'): alert('You are an adult');
// }



// - Создайте меню, которое раскрывается/сворачивается при клике

// Код тут...
// let menu = document.getElementById('menu');
// let links = document.getElementsByName('link');
// console.log(links);
// menu.onclick = () => {
//     links.forEach(value => {
//         value.style.display === 'inline-block' ?  value.style.display = 'none':  value.style.display = 'inline-block';
//     })
// }
//
// links.forEach(value => {
//     value.addEventListener('click', (e) => {
//         e.stopPropagation();
//     })
// })


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

// Код тут...
// let comments = [
//     {title: 'Lada', body: 'The worst car in the world'},
//     {title: 'Audi', body: 'The best car in the world'},
//     {title: 'Toyota', body: 'Simple and good'}
// ]
// let bigDiv = document.createElement('div');
// bigDiv.style.width = '150px';
// bigDiv.style.border = '2px solid green';
//
// comments.forEach((value, index) => {
//     let divElem = document.createElement('div');
//     divElem.classList.add('div');
//     divElem.setAttribute('id', 'title' + (index + 1));
//     divElem.innerText = value.title;
//
//     let buttonElem = document.createElement('button');
//     buttonElem.setAttribute('id', 'button' + (index + 1));
//     buttonElem.innerText = 'Body';
//     divElem.appendChild(buttonElem);
//     bigDiv.appendChild(divElem);
//
//     let pElem = document.createElement('p');
//     pElem.setAttribute('id', 'text' + (index + 1));
//     pElem.style.border = '2px solid blue';
//     pElem.style.padding = '3px';
//     pElem.style.display = 'block';
//     pElem.innerText = value.body;
//     bigDiv.appendChild(pElem);
// });
// document.body.appendChild(bigDiv);
//
// let button1 = document.getElementById('button1');
// button1.addEventListener('click', () => {
//     let text = document.getElementById('text1');
//     console.log(text);
//     console.log(text.style.display);
//     text.style.display = text.style.display === 'block' ? 'none': 'block';
// });
//
// let button2 = document.getElementById('button2');
// button2.addEventListener('click', () => {
//     let text = document.getElementById('text2');
//     console.log(text.style.display);
//     text.style.display = text.style.display === 'block' ? 'none': 'block';
// });
//
// let button3 = document.getElementById('button3');
// button3.addEventListener('click', () => {
//     let text = document.getElementById('text3');
//     text.style.display = text.style.display === 'block' ? 'none': 'block';
// });


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

//  Код тут...
// let form1 = document.forms.form1_name;
// let form2 = document.forms.form2_name;
// let button = document.getElementById('button1');
//
// button.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(`${form1.input1.value} ${form1.input2.value} ${form2.input3.value} ${form2.input4.value}`);
// })


// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// Код тут...
// function createTable(rows, cells, text) {
//     let tableElem = document.createElement('table');
//     for (let i = 0; i < rows; i++) {
//         let row = document.createElement('tr');
//         for (let j = 0; j < cells; j++) {
//             let cell = document.createElement('td');
//             cell.style.border = '1px solid green';
//             cell.innerText = text;
//             row.appendChild(cell);
//         }
//         tableElem.appendChild(row);
//     }
//     document.body.appendChild(tableElem);
// }


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// Код тут...
// let form = document.forms.formWithInputs;
// form.build_button.addEventListener('click', (e) => {
//     e.preventDefault();
//     createTable(form.rowsNumber.value, form.cellsNumber.value, form.innerText.value);
// });



// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// Код тут...
// let linksArray = ['images\\Acura_TLX_CV10.jpg', 'images\\Audi_Etron_HF3.jpg', 'images\\BMW_G20_HF5.jpg', 'images\\Dodge_Ram_HF6.jpg', 'images\\Ford_F-150_HF6.jpg'];
// let photoIndex = 0;
// let rightButton = document.getElementById('right_button');
// let leftButton = document.getElementById('left_button');
// let photoElem = document.getElementById('photo');
//
// rightButton.addEventListener('click', () => {
//     --photoIndex < 0 ? photoIndex = linksArray.length - 1 : photoIndex;
//     photoElem.setAttribute('src', linksArray[photoIndex]);
// });
//
// leftButton.addEventListener('click', () => {
//     ++photoIndex > linksArray.length - 1 ? photoIndex = 0 : photoIndex;
//     photoElem.setAttribute('src', linksArray[photoIndex]);
// });


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
        // Для двох завданнь коди нижче
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// Код тут...
// let badWords = ['idiot', 'durak', 'fuck', 'olen', 'debil'];
//
// let form = document.forms.form_2;
// form.check_button.addEventListener('click', () => {
//     badWords.forEach(value => {
//         if(form.word_input.value.includes(value)) {
//             alert('You have entered bad word!!!');
//         }
//     })
// })


// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// Код тут...
// let titles = document.querySelectorAll('.rules h2');
// let content = document.getElementById('content');
// let ulElem = document.createElement('ul');
// let ruleIndex = 1;
// for (let title of titles) {
//     title.setAttribute('id', 'title' + ruleIndex);
//     let link = document.createElement('a');
//     let liElem = document.createElement('li');
//     link.style.textDecoration = 'none';
//     link.style.fontWeight = 'bold';
//     link.innerText = title.innerText;
//     link.setAttribute('href', '#title' + ruleIndex);
//     liElem.appendChild(link);
//     ulElem.appendChild(liElem);
//     ruleIndex += 1;
// }
// content.appendChild(ulElem);


// -- взять массив пользователей
let usersWithAddress = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];

// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// Код тут...
// let firstCheck = document.getElementById('status_check');
// let secondCheck = document.getElementById('age_check');
// let thirdCheck = document.getElementById('city_check');
//
// firstCheck.oninput = () => {
//     filterUsers();
// }
//
// secondCheck.oninput = () => {
//     filterUsers();
// }
//
// thirdCheck.oninput = () => {
//     filterUsers();
// }
//
// function filterUsers () {
//     let filter = usersWithAddress.filter(value => {
//         let boolValue = true;
//         if(firstCheck.checked)
//             boolValue = boolValue && value.status === false;
//         if(secondCheck.checked)
//             boolValue = boolValue && value.age > 29;
//         if(thirdCheck.checked)
//             boolValue = boolValue && value.address.city === 'Kyiv';
//         return boolValue;
//     });
//     buildTable(filter);
// }
//
// function buildTable(filter) {
//     let tableElem = document.createElement('table');
//     let tableDiv = document.getElementById('table_div');
//     for (let filterElem of filter) {
//         let arr = getValue(filterElem,);
//         console.log(arr);
//
//         let tr = document.createElement('tr');
//         for (let arrElement of arr) {
//             let td = document.createElement('td');
//             td.style.border = '1px solid green';
//             td.innerText = arrElement;
//             tr.appendChild(td);
//         }
//         tableElem.appendChild(tr);
//     }
//     if(tableDiv.hasChildNodes())
//             document.querySelector('#table_div table').remove();
//     tableDiv.appendChild(tableElem);
// }
//
// function getValue(obj) {
//     let arr = [];
//     for (let objKey in obj) {
//         if(typeof obj[objKey] === 'object'){
//             console.log(objKey);
//             arr = arr.concat(getValue(obj[objKey]));
//             continue;
//         }
//         arr.push(obj[objKey]);
//     }
//     console.log(arr);
//     return arr;
// }



// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
// ???


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
// let text = document.getElementById('text_div');

// Код тут..
// text.addEventListener('mouseup', (e) => {
//     let inner_text = text.innerText;
//     console.log(inner_text);
//     let selectedText = '<span style="font-weight: bold">' + window.getSelection().toString() + '</span>';
//     let firstHalf = inner_text.substring(0, window.getSelection().anchorOffset);
//     let secondHalf = inner_text.substring(window.getSelection().focusOffset);
//
//     inner_text = firstHalf + selectedText + secondHalf;
//     text.innerHTML = inner_text;
// });
