// Треба реалізувати свій розпорядок дня.
// На асинк авейт.
// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.

// function myDayEvent(event, error) {
//     return new Promise((resolve, reject) => {
//         console.log(event);
//         let delay = Math.round(1000 * Math.random() + 1000);
//         setTimeout(() => {
//             console.log('\tВиконується - ' + delay / 1000 + ' s');
//             parseInt(event) > parseInt(error) ? reject(error): resolve(event);
//         }, delay);
//     });
// }
//
// async function DayFlow() {
//     console.log('День почався:');
//     try {
//         let event = await myDayEvent('8:00 Прокинутись', '8:00Проспав будильник');
//         console.log('\t' + event + ' Виконано');
//         event = await myDayEvent('10:00 Поїхати до універу','10:00 Не встигнув на маршрутку');
//         console.log('\t' + event + ' Виконано');
//         event = await myDayEvent('11:00 Прийти на пару', '11:00 Пара вже почалась');
//         console.log('\t' + event + ' Виконано');
//         event = await myDayEvent('13:00 Пообідади', '13:00 Кормушка закрита');
//         console.log('\t' + event + ' Виконано');
//         event = await myDayEvent('15:00 Поїхати додому', '15:00 Не встигнув на трамвай');
//         console.log('\t' + event + ' Виконано');
//         event = await myDayEvent('17:00 Прийняти душ', '16:00 Виключили воду');
//         console.log('\t' + event + ' Виконано');
//         event = await myDayEvent('20:00 Дивитись лекцію в Okten', '20:00 Лекція вже почалась');
//         console.log('\t' + event + ' Виконано');
//         event = await myDayEvent('4:00 Закінчити домашку від Віті', '4:00 Ти заснув за ноутом');
//         console.log('\t' + event + ' Виконано');
//     } catch (error) {
//         console.log('Error ' + error);
//     }
//     console.log('День закінчився');
// }
//
// DayFlow();



// Реалізувати друкарську машинку.
// У вас є текст "Hello World". (або юудь який інший на ваш розсуд)
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером.
// Приклад: "Hello"
// Затримки:
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

PrintMessage('Hello world'.split(""));

async function PrintMessage(message) {
    for (let symbol of message) {
        console.log(await TypeWriter(symbol));
    }
}

function TypeWriter(symbol) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(symbol);
        }, 900 * Math.random() + 100);
    })
}


// Написати counter на замиканнях
// function counter() {
//     let count = 0;
//     function increment() {
//         count += 1;
//         console.log(count);
//     }
//     return increment;
// }
//
// let increase = counter();
// console.log(increase);
// increase.increment();
// increase.increment();
// increase.increment();

