
// - створити функцію яка виводить масив
let arr1 = [1, 2, 3, 4, 5];
function arrReverse (arr) {
    for (let i = arr.length-1; i >= 0; i--) {
        console.log(arr[i]);
    }
    console.log(arr);
}
//arrReverse(arr1);

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
let arr2 = [];
function arrRandomFilling (arr, size) {
    for (let i = 0; i < size; i++) {
        let value = Math.round((5-1) * Math.random() + 1);
        arr.push(value);
    }
    console.log(typeof arr);
    arrReverse(arr);
}
//arrRandomFilling(arr2, 10);


// - створити функцію яка приймає три числа та виводить та повертає найменьше.
let value1 = 5;
let value2 = -13;
let value3 = 99;
function findSmallestNumber(number1, number2, number3) {
    let smallest;
    switch (true) {
        case (number1 < number2 && number1 < number3):
            smallest = number1;
            break;
        case (number2 < number1 && number2 < number3):
            smallest = number2;
            break;
        default:
            smallest = number3;
    }
    console.log(`All numbers: ${value1}, ${value2}, ${value3}. The smallest number: ${smallest}`)
}
//findSmallestNumber(value1, value2, value3);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
value1 = 15;
value2 = 945;
value3 = 941.578;
function findBiggestNumber(number1, number2, number3) {
    switch (true) {
        case (number1 > number2 && number1 > number3):
            return number1;
        case (number2 > number3 && number2 > number3):
            return  number2;
        default:
            return number3;
    }
}
//console.log(`All numbers: ${value1}, ${value2}, ${value3}. The biggest number: ${findBiggestNumber(value1, value2, value3)}`)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
function findBiggestAndSmallest() {
   let array = [];
    for (let argument of arguments) {
        array.push(argument);
    }
    console.log('All numbers: ' + array);
    array.sort((a, b) => a - b);
    console.log('The biggest number: ' + array[array.length-1]);
    return array[0];
}
//console.log('The smallest number: ' + findBiggestAndSmallest(9, 15, -9, 88, -174, 856));

// - створити функцію яка повертає найбільше число з масиву
function biggestFromArray (array) {
    let biggestValue = array[0];
    for (let arrayElement of array) {
        if(biggestValue < arrayElement)
            biggestValue = arrayElement;
    }
    console.log('All numbers: ' + array);
    return biggestValue;
}
//console.log('The biggest number: ' + biggestFromArray([55, 14, 18, 1, 9, -9]));

// - створити функцію яка повертає найменьше число з масиву
function smallestFromArray (array) {
    let smallestValue = array[0];
    for (let arrayElement of array) {
        if(smallestValue > arrayElement)
           smallestValue = arrayElement;
    }
    console.log('All numbers: ' + array);
    return smallestValue;
}
//console.log('The smallest number: ' + smallestFromArray([55, 14, 18, 1, 9, -9]));

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
function sumator (array) {
    let sum = 0;
    for (let arrayElement of array) {
        sum += arrayElement;
    }
    console.log('All numbers: ' + array);
    return sum;
}
//console.log(`Sum of all numbers: ${sumator([55, 14, 18, 1, 9, -9])}`);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function average (array) {
    let sum = 0;
    for (let arrayElement of array) {
        sum += arrayElement;
    }
    console.log('All numbers: ' + array);
    return sum/array.length;
}
//console.log(`Average value of all numbers: ${average([55, 10, 18, 1, 9, -9])}`);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
let cars = [
    'object',
    25,
    98,
    {brand: 'BMW', model: '520d', body: 'sedan', engineCapacity: 2.0, engineType: 'diesel'},
    {brand: 'Renault', model: 'Laguna', body: 'liftback', engineCapacity: 1.5, engineType: 'diesel'},
    {brand: 'Mazda', model: 'RX-8', body: 'sedan', engineCapacity: 2.0, engineType: 'gasoline'},
    {brand: 'Nissan', model: 'leaf', body: 'sedan', engineCapacity: 0.0, engineType: 'electro'},
    {brand: 'Deawoo', model: 'Sens', body: 'sedan', engineCapacity: 1.3, engineType: 'gasoline'},
    true
];
function objectsCounter (array) {
    let count = 0;
    for (let arrayElement of array) {
        if((typeof arrayElement) === 'object')
            count += 1;
    }
    return count;
}
//console.log(`Number of objects in the array: ${objectsCounter(cars)}`);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
function objectsPropertiesCounter (array) {
    let count = 0;
    for (let arrayElement of array) {
        if((typeof arrayElement) === 'object')
            for (let element in arrayElement) {
                count += 1;
            }
    }
    return count;
}
//console.log(`Number of all properties of objects in the array: ${objectsPropertiesCounter(cars)}`);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
function sumArraysValues (array1, array2) {
    let array3 = [];
    for (let i = 0; i < array2.length; i++) {
        array3[i] = array1[i] + array2[i];
    }
    return array3;
}
//console.log("Result", sumArraysValues([1,2,3,4], [2,3,4,5]));

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
let cars2 = [
    {brand: 'BMW', model: '520d', body: 'sedan', engineCapacity: 2.0, engineType: 'diesel'},
    {brand: 'Renault', model: 'Laguna', body: 'liftback', engineCapacity: 1.5, engineType: 'diesel'},
    {brand: 'Mazda', model: 'RX-8', body: 'sedan', engineCapacity: 2.0, engineType: 'gasoline'},
    {brand: 'Nissan', model: 'leaf', body: 'sedan', engineCapacity: 0.0, engineType: 'electro'},
    {brand: 'Deawoo', model: 'Sens', body: 'sedan', engineCapacity: 1.3, engineType: 'gasoline'}
]

function changePosition (array, i) {
    if(i + 1 <= array.length - 1) {
        let val = array[i];
        array[i] = array[i+1];
        array[i+1] = val;
    }
    console.log(array);
}
//changePosition(cars2, 3);


// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
function makeArrayCopy (array) {
    let array_copy = [];
    for (let arrayElement of array) {
        let val = JSON.stringify(arrayElement);
        array_copy.push(JSON.parse(val));
        arrayElement = JSON.parse(val);
    }
    return array_copy;
}

function addToEnd (array) {
    let val = array.shift();
    array.push(val);
    return array;
}
//console.log(cars2);
//console.log(addToEnd(makeArrayCopy(cars2)));

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
function moveToEnd (array) {
    for (let i = array.length-1; i >= 0; i--) {
        if(array[i] === 0){
            let element = array.splice(i, 1);
            array.push(element[0]);
        }
        if(array[i] === 1){
            console.log(i);
        }
    }
    return array;
}
//console.log(moveToEnd([0,0,1,0]));

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function  addElementWithText (type, text) {
    let element1 = document.createElement('div');
    element1.style.border = '1px solid green';
    element1.innerText = 'Hello owu!';
    document.body.appendChild(element1);

    let element2 = document.createElement(type);
    element2.style.border = '1px solid red';
    element2.innerText = text;
    document.body.appendChild(element2);
}
//addElementWithText('div', 'Привіт октен!');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

let cars3 = [
    {brand: 'BMW', model: '520d', body: 'sedan', engineCapacity: 2.0, engineType: 'diesel'},
    {brand: 'Renault', model: 'Laguna', body: 'liftback', engineCapacity: 1.5, engineType: 'diesel'},
    {brand: 'Mazda', model: 'RX-8', body: 'sedan', engineCapacity: 2.0, engineType: 'gasoline'},
    {brand: 'Nissan', model: 'leaf', body: 'sedan', engineCapacity: 0.0, engineType: 'electro'},
    {brand: 'Deawoo', model: 'Sens', body: 'sedan', engineCapacity: 1.3, engineType: 'gasoline'}
]

function addArrayListToElement (array, id) {
    let ol_element = document.createElement('ol');
    for (let arrayElement of array) {
        let ul_element = document.createElement('ul');
        for (let car in arrayElement) {
            let li_element = document.createElement('li');
            li_element.innerText = `${car}: ${arrayElement[car]}`;
            ul_element.appendChild(li_element);
        }
        let li_element = document.createElement('li');
        li_element.appendChild(ul_element);
        ol_element.appendChild(li_element);
    }
    let main_element = document.getElementById(id);
    main_element.appendChild(ol_element);
}
//addArrayListToElement(cars3, 'id_idenf');

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

function addArrayToElement (array, type, id) {
    let i = 0;
    for (let arrayElement of array) {
        let element = document.createElement(type);
        element.style.border = '3px solid blue';
        element.style.marginBottom = '5px';
        element.append(`Array index: ${i} `);
        for (let arrayElementKey in arrayElement) {
            element.append(`${arrayElementKey}: ${arrayElement[arrayElementKey]} `);
        }
        i += 1;
        let block = document.getElementById(id);
        block.appendChild(element);
    }
}
//addArrayToElement(cars3, 'div', 'id_idenf');

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
function addCarsArrayToElement (array, id) {
    for (let arrayElement of array) {
        let div_element = document.createElement('div');
        div_element.style.border = '2px solid green';
        div_element.style.margin = '5px';
        for (let car in arrayElement) {
            let p_element = document.createElement('p');
            p_element.innerText = `${car}: ${arrayElement[car]}`;
            div_element.appendChild(p_element);
        }
        let main_element = document.getElementById(id);
        main_element.style.border = '2px solid black';
        main_element.appendChild(div_element);
    }

}
//addCarsArrayToElement(cars3, 'id_idenf');

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
//let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

function combineArrays (array1, array2) {
    let usersWithCities = JSON.parse(JSON.stringify(array1));
    let i = 0;
    for (let array1Element of array1) {
        for (let array2Element of array2) {
            if(usersWithCities[i].id === array2Element.user_id){
                usersWithCities[i].address = array2Element;
            }
        }
        i += 1;
    }

    return usersWithCities;
}
//combineArrays(usersWithId, citiesWithId);

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    }, {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    }, {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    }, {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    }, {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    }, {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    }, {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    }, {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];

function rulesBuilding(arr) {
    let divElement = document.createElement('div');
    divElement.id = 'wrap';
    divElement.style.border = '2 px solid blue';
    divElement.style.padding = '20px';
    let i = 1;
    for (let arrElement of arr) {
        let hElement = document.createElement('h2');
        let pElement = document.createElement('p');
        let divka = document.createElement('div');
        divka.id = 'rule_' + i;
        divka.style.border = '1px solid green';
        hElement.innerText = arrElement.title;
        pElement.innerText = arrElement.body;
        divka.appendChild(hElement);
        divka.appendChild(pElement);
        divElement.appendChild(divka);
        i += 1;
    }
    document.body.appendChild(divElement);
}
//rulesBuilding(rules);


// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
function degreeOfTwo(number) {
    if((number % 2) === 0){
        let divided_number = number / 2;
        if(divided_number === 1){
            return 'Yes';
        }
        return degreeOfTwo(divided_number);
    }
    return 'No';
}
//console.log(degreeOfTwo(255));

// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
const newObject = {
    name: 'Vitalii',
    age: 19,
    position: 'student',
    car: {
        brand: 'Renault',
        model: 'Laguna',
        engine: {
            capacity: 1.5,
            type: {
                fuel: 'diesel',
                cylinders: 4,
                structure: 'row-four'
            }
        }
    }
};
console.log((typeof newObject["car"]));

function deepCope(obj) {
    let new_obj = {};
    for (let objKey in obj) {
        if(typeof obj[objKey] === 'object'){
            new_obj[objKey] = deepCope(obj[objKey]);;
        } else {
            new_obj[objKey] = obj[objKey];
        }
    }
    return new_obj;
}

//console.log(newObject);
//console.log(deepCope(newObject));

// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========

