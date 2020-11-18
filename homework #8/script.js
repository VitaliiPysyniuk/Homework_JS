// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let textarea1 = document.getElementById('textarea_1');
// localStorage.getItem('text1') === null ? localStorage.setItem('text1', '') : textarea1.value = localStorage.getItem('text1');
//
// textarea1.addEventListener('input', ev => {
//     localStorage.setItem('text1', textarea1.value);
// })

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
// let form = document.getElementById("main_form");
// let form_values = {};
//
// if(localStorage.getItem('form_values') != null) {
//     form_values = JSON.parse(localStorage.getItem('form_values'));
//     for (let elem in form_values) {
//         if(document.getElementById(elem).getAttribute('type') === 'radio'){
//             document.getElementById(elem).checked = form_values[elem];
//             continue;
//         }
//         document.getElementById(elem).value = form_values[elem];
//     }
// }
//
// form.addEventListener('mouseleave', ev => {
//     for (let child of form.children) {
//         if(child.hasAttribute('id')) {
//             if (child.getAttribute('type') === 'radio') {
//                 form_values[child.getAttribute('id')] = child.checked;
//                 continue;
//             }
//             form_values[child.getAttribute('id')] = child.value;
//         }
//     }
//     localStorage.setItem('form_values', JSON.stringify(form_values));
// });

// localStorage.clear();


// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....

// let button1 = document.getElementById('button_1');
// let button2 = document.getElementById('button_2');
// let button3 = document.getElementById('button_3');
// let textarea3 = document.getElementById('textarea_3');
// let changesIndex = 0;
// let text3_arr = [];
//
// if(localStorage.getItem('text3_arr') === null && localStorage.getItem('changesIndex') === null ) {
//     localStorage.setItem('text3_arr', JSON.stringify(text3_arr));
//     localStorage.setItem('changesIndex', changesIndex);
// } else{
//     text3_arr = JSON.parse(localStorage.getItem('text3_arr'));
//     changesIndex = +localStorage.getItem('changesIndex');
//     textarea3.value = text3_arr[changesIndex-1];
// }
//
// button1.addEventListener('click', ev => {
//     text3_arr.push(textarea3.value);
//     localStorage.setItem('text3_arr', JSON.stringify(text3_arr));
//     changesIndex += 1;
//     localStorage.setItem('changesIndex', changesIndex);
// });
//
// button2.addEventListener('click', ev => {
//     if(changesIndex >= text3_arr.length - 1){
//         alert('No more text changes!');
//         return;
//     }
//     changesIndex += 1;
//     textarea3.value = text3_arr[changesIndex];
// });
//
// button3.addEventListener('click', ev => {
//     if(changesIndex === 0){
//         alert('No more text changes!');
//         return;
//     }
//     console.log("Index ", changesIndex, " Length ", text3_arr.length);
//     changesIndex >= text3_arr.length ? changesIndex-- : changesIndex;
//     changesIndex -= 1;
//     textarea3.value = text3_arr[changesIndex];
// });



// localStorage.clear();

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

// localStorage.clear();

let users = [];
let saveFlag = false;
//силка на ров  того юзера
let changedRow;
//індекс юзера в масиві
let updateIndex = 0;

let formDiv = document.getElementById('form_div');
let mainTable = document.getElementById('main_table');
let mainForm = document.getElementById('form_4');

let addButton = document.getElementById('button_add');
let saveButton = document.getElementById('button_save');


if(localStorage.getItem('users') !== null) {
    let index = 0;
    for (let user of JSON.parse(localStorage.getItem('users'))) {
        let rowEl = document.createElement('tr');
        for (let userInfo in user) {
            let cellEl = document.createElement('td');
            cellEl.innerText = user[userInfo];
            rowEl.appendChild(cellEl);
        }
        buttonsCreation(rowEl, index);
        let newId = '' + (users.length - 1) + '' + (users.length - 1);
        rowEl.setAttribute('id', newId)
        mainTable.appendChild(rowEl);
        index += 1;
    }
    users = JSON.parse(localStorage.getItem('users'));
}

addButton.addEventListener('click', e => formDiv.style.display = 'block');

saveButton.addEventListener('click', e => {
    e.preventDefault();

    if(!saveFlag) {
        let user = {};
        let rowEl = document.createElement('tr');
        for (let inputEl of mainForm.children) {
            if (inputEl.getAttribute('type') !== 'text')
                continue;
            let cellEl = document.createElement('td');
            let name = inputEl.getAttribute('name')
            cellEl.innerText = inputEl.value
            user[name] = inputEl.value;
            rowEl.appendChild(cellEl);
            inputEl.value = '';
        }
        users.push(user);
        buttonsCreation(rowEl, users.length - 1);
        let newId = '' + (users.length - 1) + '' + (users.length - 1);
        rowEl.setAttribute('id', newId)
        mainTable.appendChild(rowEl);
        formDiv.style.display = 'none';
        localStorage.setItem('users', JSON.stringify(users));
        return;
    }

    let row = document.getElementById(changedRow);
    let cellIndex = 0;

    for (let child of mainForm.children) {
        if (child.getAttribute('type') !== 'text')
                continue;
        let name = child.getAttribute('name');
        users[updateIndex][name] = child.value;
        row.children[cellIndex].innerText = child.value;
        child.value = '';
        cellIndex += 1;
    }
    saveFlag = false;
    formDiv.style.display = 'none';
    localStorage.setItem('users', JSON.stringify(users));
});

function buttonsCreation(rowEl, currentIndex) {
    let cellEl1 = document.createElement('td');
    let button1 = document.createElement('button');
    button1.innerText = 'Update';
    button1.setAttribute('id', currentIndex + 'Update' );
    button1.addEventListener('click', ev => {
        formDiv.style.display = 'block';
        let rowIndex = parseInt(button1.getAttribute('id'));
        let user = users[rowIndex];
        for (let userInfo in user) {
            mainForm[userInfo].value = user[userInfo];
        }
        console.log(ev);
        changedRow = ev.target.parentElement.parentElement.getAttribute('id');
        console.log(changedRow);
        saveFlag = true;
        updateIndex = rowIndex;
    });
    cellEl1.appendChild(button1);
    rowEl.appendChild(cellEl1);

    let cellEl2 = document.createElement('td');
    let button2 = document.createElement('button');
    button2.innerText = 'Delete';
    button2.setAttribute('id', currentIndex + 'Delete');
    button2.addEventListener('click', ev => {
        let rowIndex = parseInt(button1.getAttribute('id'));
        users.splice(parseInt(button2.getAttribute('id')), 1);
        ev.target.parentElement.parentElement.remove();
        console.log(rowIndex);
        buttonsIdChange(rowIndex);
        localStorage.setItem('users', JSON.stringify(users));
    });
    cellEl2.appendChild(button2);
    rowEl.appendChild(cellEl2);
}

function buttonsIdChange(deletedIndex) {
    for (let tableRow of mainTable.children) {
        console.log(tableRow.children[6].innerHTML);
        if(parseInt(tableRow.children[6].children[0].getAttribute('id')) > deletedIndex)
            tableRow.children[6].children[0].setAttribute('id', deletedIndex + 'Update')
        if(parseInt(tableRow.children[7].children[0].getAttribute('id')) > deletedIndex) {
            tableRow.children[7].children[0].setAttribute('id', deletedIndex + 'Delete')
            deletedIndex += 1;
        }
    }
}
