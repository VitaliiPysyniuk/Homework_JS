/*
- присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16,
true, false
Вывести каждую при помощи console.log , alert, document.write
*/

let str1 = 'hello';
let str2 = 'owu';
let str3 = 'com';
let str4 = 'ua';
let integer1 = 1;
let integer2 = 10;
let integer3 = -999;
let integer4 = 123;
let float1 = 3.14;
let float2 = 2.7;
let integer5 = 16;
let boolean1 = true;
let boolean2 = false;

/*alert(str1);
alert(str2);
alert(str3);
alert(str4);*/

document.write('Integer values: ');
document.write('| ', integer1, ' | ');
document.write(integer2, ' | ');
document.write(integer3, ' | ');
document.write(integer4, ' | ');
document.write(integer5,' | ', "<br>");

document.write('Float values: ');
document.write('| ', float1, ' | ');
document.write(float2, ' | ', "<br>");

console.log('boolean1: ', boolean1);
console.log('boolean2: ', boolean2);


/*
- переопределить каждую переменную из задания 1 дав им произвольные значения
Вывести каждую при помощи console.log , alert, document.write
*/

str1 = 'hello world!';
str2 = 'oktenweb';
str3 = '@gmail.com';
str4 = 'ukraine';

integer1 = -158;
integer2 = 333;
integer3 = 666;
integer4 = 2;
integer5 = -101;

float1 = 6.2894;
float2 = 7.2;

boolean1 = !boolean1;
boolean2 = !boolean2;

/*alert(str1);
alert(str2);
alert(str3);
alert(str4);*/

document.write('Integer values: ');
document.write('| ', integer1, ' | ');
document.write(integer2, ' | ');
document.write(integer3, ' | ');
document.write(integer4, ' | ');
document.write(integer5, ' | ', "<br>");

document.write('Float values: ');
document.write('| ', float1, ' | ');
document.write(float2, ' | ', "<br>");

console.log('boolean1: ', boolean1);
console.log('boolean2: ', boolean2);

//- Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write

let int_val1 = 54;
let float_val1 = 4.44444;
let float_val2 = -0.87;

let str_val1 = 'Laptop';
let str_val2 = '895';
let str_val3 = '?-/!';

document.write(str_val1, "<br>", str_val2, "<br>", str_val3, "<br>");
console.log(int_val1, float_val1, float_val2);

/*
- при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные.
    Вывести каждую при помощи console.log , alert, document.write
*/

let firstName = prompt('Enter your first name!');
let lastName = prompt('Enter your last name');
let middleName = prompt('Enter your middle name');

alert('Are you ' + lastName + ' ' + firstName + ' ' + middleName + '?');

//- Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

let person = lastName + ' ' + firstName + ' ' + middleName;
console.log(person);

//- Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.

/*firstName = prompt('Enter your father first name!');
lastName = prompt('Enter your father last name');
middleName = prompt('Enter your father middle name');
let father = lastName + ' ' + firstName + ' ' + middleName;

firstName = prompt('Enter your mother first name!');
lastName = prompt('Enter your mother last name');
middleName = prompt('Enter your mother middle name');
let mother = lastName + ' ' + firstName + ' ' + middleName;

firstName = prompt('Enter your brother first name!');
lastName = prompt('Enter your brother last name');
middleName = prompt('Enter your brother middle name');
let brother = lastName + ' ' + firstName + ' ' + middleName;*/

//- при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

let variable1 = +prompt("The first variable.");
let variable2 = +prompt("The second variable.");
let variable3 = +prompt("The third variable.");
console.log(variable1, variable2, variable3);

/*
- при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt.
    Сложить их между собой записав результат в переменную result и вывести в консоль браузера
*/

variable1 = parseInt(prompt("The first variable."));
variable2 = parseInt(prompt("The second variable."));
variable3 = parseInt(prompt("The third variable."));
variable4 = parseInt(prompt("The fourth variable."));
let result = variable1 + variable2 + variable3 + variable4;
console.log('result (int): ', result);

/*
- при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу.
    Сложить их между собой записав результат в переменную result и вывести в консоль браузера
*/

variable1 = parseFloat(prompt("The first variable."));
variable2 = parseFloat(prompt("The second variable."));
variable3 = parseFloat(prompt("The third variable."));
result = variable1 + variable2 + variable3;
console.log('result (float): ', result);

/*
- при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round
Сложить их между собой записав результат в переменную  и вывести в консоль браузера
*/

variable1 = Math.round(parseFloat(prompt("The first variable.")));
variable2 = Math.round(parseFloat(prompt("The second variable.")));
variable3 = Math.round(parseFloat(prompt("The third variable.")));
result = variable1 + variable2 + variable3;
console.log('result (round): ', result);

/*
- при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень.
    Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
*/

let x = parseInt(prompt("Enter X:"));
let y = parseInt(prompt("Enter Y:"));
result = Math.pow(x, y);
console.log('result (x^y): ', result);

/*
- При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль
let a = 100; let b = '100'; let c = true; let d = undefined;
*/
let a = 100;
let b = '100';
let c = true;
let d = undefined;
console.log("type of a: ", typeof a);
console.log("type of b: ", typeof b);
console.log("type of c: ", typeof c);
console.log("type of d: ", typeof d);
/*
- Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
 В одинаковых выражениях в задании не использовать два одинаковых оператора.
Каждое выражение вложить в свою переменную
    5 ? 6 -> true       Answer: !=
    5 ? 6 -> false      Answer: >
    5 ? 6 -> false      Answer: <
    5 ? 6 -> false      Answer: ==
    10 ? 10 -> true     Answer: ===
    10 ? 10 -> true     Answer: <=
    10 ? 10 -> false        Answer: !==
    10 ? 10 -> false        Answer: ==
    10 ? 10 -> false        Answer: >
    123 ? '123' -> false        Answer: ===
    123 ? '123' -> true     Answer: ==
*/

/*
Дополнительно:
- Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
console.log(132 > 100 && 45 < 12 );         Answer: false
console.log(34 > 33 && 23 < 90 );       Answer: true
console.log(99 > 100 && 45 > 12 );      Answer: false
console.log(132 > 100 || 45 < 12 );     Answer: true
console.log(111 > 11 || 45 < 111 );     Answer: true
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );     Answer: true
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );      Answer: true
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );       Answer: false
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));      Answer: true
console.log(!!'-1');        Answer: true
console.log(!!-1);      Answer: true
console.log(!!'0');     Answer: true
console.log(!!'null');      Answer: true
console.log(!!'undefined');     Answer: true
console.log(!!(3/'owu'));       Answer: true ---- (right answer: false)
console.log((111 > 11 || 45 < 111) ||  !!'0');      Answer: true
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));     Answer: false
*/

/*
=====================
======ДОП============
=====================
    */

/*
1. Три різних числа вводяться через prompt().
За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
*/

let var1 = prompt("var1 = ");
let var2 = prompt("var2 = ");
let var3 = prompt("var3 = ");
if((var1 <= var2) && (var1 <= var3)){
    if(var2 <= var3){
        console.log('Sorted: ', var1, var2, var3);
    } else {
        console.log('Sorted: ', var1, var3, var2);
    }
}  else if((var1 >= var2) && (var2 <=var3)){
    if(var1 <= var3){
        console.log('Sorted: ', var2, var1, var3);
    } else {
       console.log('Sorted: ', var2, var3, var1);
    }
} else if((var1 >= var3) && (var3 <=var2)){
    if(var1 <= var2){
        console.log('Sorted: ', var3, var1, var2);
    }  else {
        console.log('Sorted: ', var3, var2, var1);
    }
}
/*
2.
Все параматры получаем с клавиатуры!!!!
Имитируем поведение пешехода на перекстке.
Если светофор зеленый - вывести "иди".
Если светофор желтый - вывести "подожди".
Если светофор красный - вывести "стой".
Если светофор в аварийном режиме вывести "делай что хочешь"!
*/

let trafficLightColor = prompt("Traffic light color:");
if(trafficLightColor.toLocaleLowerCase() === "green"){
    console.log("Go!");
} else if(trafficLightColor.toLocaleLowerCase() === "yellow"){
    console.log("Wait!");
} else if(trafficLightColor.toLocaleLowerCase() === "red"){
    console.log("Stop!!!");
} else{
    console.log("Fly)))");
}

/*
3
Все параметры получаем с клавиатуры!!!!(prompt , confirm)
Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
Улучшаем предыдущее задание.
Если светофор зеленый и машин нет - вывести "иди".
Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
Если светофор желтый и машины есть - вывести "жди".
Если светофор желтый и машин нет - вывести "все рано жди".
Если светофор красный и машин нет- вывести "стой все рано".
Если светофор красный - и машины есть вывести "стой и жди".
Если светофор в аварийном режиме вывести "делай что хочешь"!
*/

trafficLightColor = prompt("Traffic light color: ");
let isRoadClear = confirm("Is road clear?");
if((trafficLightColor.toLocaleLowerCase() === "green") && isRoadClear){
    console.log("Go!");
} else if((trafficLightColor.toLocaleLowerCase() === "green") && !isRoadClear){
    console.log("Wait until the intruders pass!");
} else if((trafficLightColor.toLocaleLowerCase() === "yellow") && isRoadClear){
    console.log("Wait anyway!");
} else if((trafficLightColor.toLocaleLowerCase() === "yellow") && !isRoadClear){
    console.log("Wait!");
} else if((trafficLightColor.toLocaleLowerCase() === "red") && isRoadClear){
    console.log("Stop anyway!");
} else if((trafficLightColor.toLocaleLowerCase() === "red") && !isRoadClear){
    console.log("Stop and wait!");
} else {
    console.log("Fly");
}