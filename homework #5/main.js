//Завдання #1
// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }
// ==============================================

// Код тут
// function TagObjectConst(title, action, attributes) {
//     this.titleOfTag = title;
//     this.action = action;
//     this.attrs = attributes;
// }
//
// let aTag = new TagObjectConst('tag_a', 'Designed to create links', [{titleOfAttr: 'download', actionOfAttr: 'Offers to download the file specified on the link'}, {titleOfAttr: 'hreflang', actionOfAttr: 'Identifies the language of the text by reference'}]);
// console.log(aTag);
//
// let divTag = new TagObjectConst('tag_div', 'Intended for selection of a fragment of the document', [{titleOfAttr: 'align', actionOfAttr: 'Specifies the alignment of the contents of the <div> tag'}, {titleOfAttr: 'title', actionOfAttr: 'Adds a tooltip to the content'}]);
// console.log(divTag);
//
// let h1Tag = new TagObjectConst('tag_h1', 'Is the most important first level heading', [{titleOfAttr: 'align', actionOfAttr: 'Determines the alignment of the title'}]);
// console.log(h1Tag);
//
// let spanTag = new TagObjectConst('tag_span', '', [{titleOfAttr: '', actionOfAttr: ''}, {titleOfAttr: '', actionOfAttr: ''}]);
// console.log(spanTag);
//
// let inputTag = new TagObjectConst('tag_input', 'Intended for definition of line elements of the document', [{titleOfAttr: 'dir', actionOfAttr: 'Sets the direction and display of the text'}, {titleOfAttr: 'hidden', actionOfAttr: 'Hides the contents of the item from viewing'}]);
// console.log(inputTag);
//
// let formTag = new TagObjectConst('tag_form', 'Sets the form on the web page', [{titleOfAttr: 'method', actionOfAttr: 'HTTP protocol method'}, {titleOfAttr: 'name', actionOfAttr: 'Form name'}]);
// console.log(formTag);
//
// let optionTag = new TagObjectConst('tag_option', 'Defines individual items in the list', [{titleOfAttr: 'selected', actionOfAttr: 'Sets a specific list item highlighted in advance'}, {titleOfAttr: 'value', actionOfAttr: 'The value of the list item that will be sent to the server or read using scripts'}]);
// console.log(optionTag);
//
// let selectTag = new TagObjectConst('tag_select', 'Allows you to create an interface element in the form of a drop-down list', [{titleOfAttr: 'multiple', actionOfAttr: 'Allows you to select multiple list items at once'}, {titleOfAttr: 'tabindex', actionOfAttr: 'Determines the sequence of transitions between items when a key is pressed'}]);
// console.log(selectTag);

//Завдання #2
// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }
// ==============================================

// Код тут
// class TagObjectClass {
//     constructor(title, action) {
//         this.titleOfTag = title;
//         this.action = action;
//     }
// }
//
// class TagObjectClassChild extends TagObjectClass {
//     constructor(title, action, attributes) {
//         super(title, action);
//         this.attrs = attributes;
//     }
// }
//
// let tag_a = new TagObjectClassChild('tag_a', 'Designed to create links', [{titleOfAttr: 'download', actionOfAttr: 'Offers to download the file specified on the link'}, {titleOfAttr: 'hreflang', actionOfAttr: 'Identifies the language of the text by reference'}]);
// //console.log(tag_a);
//
// let tag_div = new TagObjectClassChild('tag_div', 'Intended for selection of a fragment of the document', [{titleOfAttr: 'align', actionOfAttr: 'Specifies the alignment of the contents of the <div> tag'}, {titleOfAttr: 'title', actionOfAttr: 'Adds a tooltip to the content'}]);
// //console.log(tag_div);
//
// let tag_h1 = new TagObjectClassChild('tag_h1', 'Is the most important first level heading', [{titleOfAttr: 'align', actionOfAttr: 'Determines the alignment of the title'}]);
// //console.log(tag_h1);
//
// let tag_span = new TagObjectClassChild('tag_span', '', [{titleOfAttr: '', actionOfAttr: ''}, {titleOfAttr: '', actionOfAttr: ''}]);
// //console.log(tag_span);
//
// let tag_input = new TagObjectClassChild('tag_input', 'Intended for definition of line elements of the document', [{titleOfAttr: 'dir', actionOfAttr: 'Sets the direction and display of the text'}, {titleOfAttr: 'hidden', actionOfAttr: 'Hides the contents of the item from viewing'}]);
// //console.log(tag_input);
//
// let tag_form = new TagObjectClassChild('tag_form', 'Sets the form on the web page', [{titleOfAttr: 'method', actionOfAttr: 'HTTP protocol method'}, {titleOfAttr: 'name', actionOfAttr: 'Form name'}]);
// //console.log(tag_form);
//
// let tag_option = new TagObjectClassChild('tag_option', 'Defines individual items in the list', [{titleOfAttr: 'selected', actionOfAttr: 'Sets a specific list item highlighted in advance'}, {titleOfAttr: 'value', actionOfAttr: 'The value of the list item that will be sent to the server or read using scripts'}]);
// //console.log(tag_option);
//
// let tag_select = new TagObjectClassChild('tag_select', 'Allows you to create an interface element in the form of a drop-down list', [{titleOfAttr: 'multiple', actionOfAttr: 'Allows you to select multiple list items at once'}, {titleOfAttr: 'tabindex', actionOfAttr: 'Determines the sequence of transitions between items when a key is pressed'}]);
// //console.log(tag_select);

// Завдання #3
// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// Код тут
// class CarClass {
//     constructor(model, producer, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//     drive () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info () {
//         console.log(this);
//     }
//
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     changeYear (newValue) {
//         this.year = newValue;
//     }
//
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
//
// let car = new CarClass('AUDI', 'Germany', 2016, 225, 'gasoline');
// car.addDriver({name: 'Vitalii', exp: 1});
// car.info();

// Завдання №4
// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// Код тут...
// function CarConstr (model, producer, year, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//
//    this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.info = function () {
//         console.log(this);
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let car = new CarConstr('AUDI', 'Germany', 2016, 225, 'gasoline');
// car.changeYear(1918);
// car.info();

// Завдання №5
// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// Код тут...
// class CarClass {
//     constructor(model, producer, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//     drive ()  {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info () {
//         console.log(this);
//     }
//
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     changeYear (newValue) {
//         this.year = newValue;
//     }
//
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
//
// let car = new CarClass('ModelX', 'Tesla', 2020, 280, 0.0);
// car.info();
// car.addDriver('IlonMask');
// car.year = 2021;
// car.info();

// Завдання №6
// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// Код тут...
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// class Prince {
//     constructor(name, age, shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
// }
// let cinderellas = [];
// let c1 = new Cinderella('Anna', 20, 34);
// cinderellas.push(c1);
// let c2 = new Cinderella('Inna', 34, 20);
// cinderellas.push(c2);
// let c3 = new Cinderella('Olga', 22, 37);
// cinderellas.push(c3);
// let c4 = new Cinderella('Diana', 19, 39);
// cinderellas.push(c4);
// let c5 = new Cinderella('Oksana', 28, 18);
// cinderellas.push(c5);
// let c6 = new Cinderella('Bianka', 21, 21);
// cinderellas.push(c6);
// let c7 = new Cinderella('Danna', 25, 35);
// cinderellas.push(c7);
// let c8 = new Cinderella('Hatali', 24, 42);
// cinderellas.push(c8);
// let c9 = new Cinderella('Hatasha', 30, 44);
// cinderellas.push(c9);
// let c10 = new Cinderella('Ira', 23, 33);
// cinderellas.push(c10);
//
// let princes = [];
// let p1 = new Prince('Oleg', 25, 44);
// princes.push(p1);
// let p2 = new Prince('Anton', 45, 21);
// princes.push(p2);
// let p3 = new Prince('Vitalii', 19, 39);
// princes.push(p3);
// let p4 = new Prince('Ostap', 23, 34);
// princes.push(p4);
// let p5 = new Prince('Sasha', 37, 47);
// princes.push(p5);
// let p6 = new Prince('Pasha', 22, 20);
// princes.push(p6);
// let p7 = new Prince('Yura', 40, 18);
// princes.push(p7);
// let p8 = new Prince('Roman', 21, 24);
// princes.push(p8);
// let p9 = new Prince('Misha', 45, 23);
// princes.push(p9);
// let p10 = new Prince('Petro', 14, 15);
// princes.push(p10);
//
// let couple = [];
// for (let i = 0; i < princes.length; i++) {
//     let obj = {};
//     for (let j = 0; j < cinderellas.length; j++) {
//         if (princes[i].shoeSize === cinderellas[j].footSize) {
//             obj.prince = princes[i].name;
//             obj.cinderella = cinderellas[j].name;
//             couple.push(obj);
//         }
//     }
// }
// console.log(couple);

// Завдання №7
// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

// Код тут...
// function Cinderella (name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// function Prince (name, age, shoeSize) {
//     this.name = name;
//     this.age = age;
//     this.shoeSize = shoeSize;
//
//     this.findCinderella = function (cinderellas) {
//         for (let cinderella of cinderellas) {
//             if(this.shoeSize === cinderella.footSize) {
//                 this.cinderella = cinderella.name;
//                 console.log(this);
//                 return;
//             }
//         }
//     }
// }
//
// let cinderellas = [];
// let c1 = new Cinderella('Anna', 20, 34);
// cinderellas.push(c1);
// let c2 = new Cinderella('Inna', 34, 20);
// cinderellas.push(c2);
// let c3 = new Cinderella('Olga', 22, 37);
// cinderellas.push(c3);
// let c4 = new Cinderella('Diana', 19, 39);
// cinderellas.push(c4);
// let c5 = new Cinderella('Oksana', 28, 18);
// cinderellas.push(c5);
// let c6 = new Cinderella('Bianka', 21, 21);
// cinderellas.push(c6);
// let c7 = new Cinderella('Danna', 25, 35);
// cinderellas.push(c7);
// let c8 = new Cinderella('Hatali', 24, 42);
// cinderellas.push(c8);
// let c9 = new Cinderella('Hatasha', 30, 44);
// cinderellas.push(c9);
// let c10 = new Cinderella('Ira', 23, 33);
// cinderellas.push(c10);
//
//
// let p1 = new Prince('Oleg', 25, 44);
// p1.findCinderella(cinderellas);
// let p2 = new Prince('Anton', 45, 21);
// p2.findCinderella(cinderellas);
// let p3 = new Prince('Vitalii', 19, 39);
// p3.findCinderella(cinderellas);
// let p4 = new Prince('Ostap', 23, 34);
// p4.findCinderella(cinderellas);
// let p5 = new Prince('Sasha', 37, 47);
// p5.findCinderella(cinderellas);
// let p6 = new Prince('Pasha', 22, 20);
// p6.findCinderella(cinderellas);
// let p7 = new Prince('Yura', 40, 18);
// p7.findCinderella(cinderellas);
// let p8 = new Prince('Roman', 21, 24);
// p8.findCinderella(cinderellas);
// let p9 = new Prince('Misha', 45, 23);
// p9.findCinderella(cinderellas);
// let p10 = new Prince('Petro', 14, 15);
// p10.findCinderella(cinderellas);