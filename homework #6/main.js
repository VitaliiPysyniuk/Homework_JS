// создать массив с 20 числами.
let numbers = [58, 47, 753, 951, 57139, 12, -55, -3, 19, 73, 45, 82, 46, 29, 72, 81, 38, 45, 49, 34, 67, 61, 258, 456, 1];
//console.log(numbers);

// -- при помощи метода sort и колбека  отсортировать массив.
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
//numbers.sort((a, b) => b - a);
// console.log(numbers);

// -- при помощи filter получить числа кратные 3
// let filter = numbers.filter(value => (value % 3) === 0);
// console.log(filter);

// -- при помощи filter получить числа кратные 10
// let filter = numbers.filter(value => (value % 10) === 0);
// console.log(filter);

// -- перебрать (проитерировать) массив при помощи foreach()
// numbers.forEach((value, index) => console.log(`Index ${index} value ${value}`));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let mapArray = numbers.map(value => value *= 3);
// console.log(mapArray);

// - создать массив со словами на 15-20 элементов.
let names = ['Diana', 'Vitaliy', 'Misha', 'Victor', 'Sasha', 'Kyrylo', 'Yura', 'Vlad', 'Roman', 'Valera', 'Igor', 'Sergiy', 'Ira', 'Olga', 'Anton'];
//console.log(names);

// -- отсортировать его по алфавиту в восходящем порядке.
// let upSort = names.sort();
// console.log(upSort);

// -- отсортировать его по алфавиту  в нисходящем порядке.
// let downSort = names.sort(function (a, b) {
//     if (a > b)
//         return -1;
//     return 1;
// })
// console.log(downSort);

// -- отфильтровать слова длиной менее 4х символов
//let filter = names.filter(value => value.length < 4);
// let filter = names.filter(value => value.length <= 4);
// console.log(filter);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let mapArray = names.map(value => value + '!');
// console.log(mapArray);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
    ];
//console.log(users);

// - відсортувати його за  віком (зростання , а потім окремо спадання)
//users.sort((a, b) => a.age - b.age);
// users.sort((a, b) => b.age - a.age);
// console.log(users);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// users.sort((a, b) => a.name.length - b.name.length);
// users.sort((a, b) => b.name.length - a.name.length);
// console.log(users);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let mapUsers = users.map((value, index) => {
//     let newValue = JSON.parse(JSON.stringify(value));
//     newValue.id = newValue.age * index;
//     return newValue;
// });
// console.log(mapUsers);
// console.log(users);

// - відсортувати його за індентифікатором
// mapUsers.sort((a, b) => a.id - b.id);
// console.log(mapUsers);

// -- написать функцию калькулятора с 2мя числами и колбеком
// -- написать функцию калькулятора с 3мя числами и колбеком


// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

// дуже довго, просто, тому не цікаво)

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// let array = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
// console.log(elementIndex(array, 8));
//
// function elementIndex (arr, key) {
//     if(arr.indexOf(key) === -1)
//         return `Answer: ${arr.indexOf(key)}`
//     let positions = {};
//     for (let i = 0; i < arr.length; i++) {
//         positions['min' + arr[i]] = arr.indexOf(arr[i]);
//         positions['max' + arr[i]] = arr.lastIndexOf(arr[i]);
//         i = arr.lastIndexOf(arr[i]);
//     }
//     return `Answer: MinIndex = ${positions['min' + key]}, MaxIndex = ${positions['max' + key]}`
// }



// Вот вам еще одно дополнительное:
//
// найти приопущенную букву в массиве:
//
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

// let array = ["a","b","c","d","f"];
// array.sort();
// let symbol = array.reduce((obj, value) =>{
//     if((value.charCodeAt(0) - obj.acc.charCodeAt(0)) === 2)
//         obj.missed = String.fromCharCode(value.charCodeAt(0) - 1);
//
//     obj.acc = value;
//     return obj
// }, {acc: array[0]});
// console.log(symbol.missed);


// Cоздать функцию которая принимает число и возвращает  текст как в примере:
// 3275  —>  "3000 + 200 + 70 +5"
// console.log(splitNumber(3275, 10).slice(3));
// function splitNumber(num, div) {
//     let x = num % div;
//     let y = num / div;
//     y.toFixed(0);
//     let str = '';
//     if(y > 0) {
//         div = div * 10;
//         str = splitNumber(num - x, div);
//         str = str + " + " + x;
//     }
//     return str;
// }


// Знайти набільший елемент в масиві за допомогою reduce
// [1,6,9,0,17,88,4,7] -> 88
// let array = [1,6,9,0,17,88,4,7];
// console.log(maxValue(array));
//
// function maxValue(arr){
//     return arr.reduce((acc, value) => acc > value ? acc : value, arr[0]);
// }



// Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.
//
// 2176491947586100 -> 3
// let strNumber = '21764919475861002131';
// console.log(oneCounter(strNumber));
//
// function oneCounter(strNumber){
//     return  strNumber.split('').reduce((acc, value, index, arr) => {
//         if(+value === 1)
//             return ++acc;
//
//         if(+value === 0 && +arr[index+1] === 0)
//             arr.splice(index+1, arr.length-index-1);
//         return acc;
//     },0);
// }

