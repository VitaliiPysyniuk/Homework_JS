// Треба реалізувати свій розпорядок дня.
// Колбеками, промісами та асинк авейт.
//
// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.

// Виконання за допомогою сallback
// function myDayEvent(event, crash, callback) {
//     console.log(event);
//     let delay = Math.round(1000*Math.random() + 1000);
//     setTimeout(() => {
//         console.log('\tВиконується - ' + delay/1000 + ' s');
//         if(parseInt(event) > parseInt(crash))
//             callback(crash, null);
//         else
//             callback(null, event);
//     }, delay);
// }
//
// console.log('День почався:');
//
// myDayEvent('8:00 Прокинутись', '8:00Проспав будильник', (error, event) => {
//     if(error) {
//         console.log('\t' + error + ' - Не виконано');
//         return ;
//     }
//     console.log('\t' + event + ' - Виконано');
//
//     myDayEvent('9:00 Поснідати', '9:00 Нема часу їсти', (error, event) => {
//         if(error) {
//             console.log('\t' + error + ' - Не виконано');
//             return ;
//         }
//         console.log('\t' + event + ' - Виконано');
//
//         myDayEvent('10:00 Поїхати до універу','10:00 Не встигнув на маршрутку',(error, event) => {
//             if(error) {
//             console.log('\t' + error + ' - Не виконано');
//             return ;
//             }
//             console.log('\t' + event + ' - Виконано');
//
//             myDayEvent('11:00 Прийти на пару', '11:00 Пара вже почалась', (error, event) => {
//                 if(error) {
//                 console.log('\t' + error + ' - Не виконано');
//                     return ;
//                 }
//                 console.log('\t' + event + ' - Виконано');
//
//                 myDayEvent('13:00 Пообідади', '13:00 Кормушка закрита', (error, event) => {
//                     if(error) {
//                     console.log('\t' + error + ' - Не виконано');
//                         return ;
//                     }
//                     console.log('\t' + event + ' - Виконано');
//
//                     myDayEvent('15:00 Поїхати додому', '15:00 Не встигнув на трамвай', (error, event) => {
//                         if(error) {
//                         console.log('\t' + error + ' - Не виконано');
//                             return ;
//                         }
//                         console.log('\t' + event + ' - Виконано');
//
//                         myDayEvent('17:00 Прийняти душ', '16:00 Виключили воду', (error, event) => {
//                             if(error) {
//                             console.log('\t' + error + ' - Не виконано');
//                                 return ;
//                             }
//                             console.log('\t' + event + ' - Виконано');
//
//                             myDayEvent('20:00 Дивитись лекцію в Okten', '20:00 Лекція вже почалась', (error, event) => {
//                                 if(error) {
//                                 console.log('\t' + error + ' - Не виконано');
//                                     return ;
//                                 }
//                                 console.log('\t' + event + ' - Виконано');
//
//                                 myDayEvent('4:00 Закінчити домашку від Віті', '4:00 Ти заснув за ноутом', (error, event) => {
//                                     if(error) {
//                                     console.log('\t' + error + ' - Не виконано');
//                                         return ;
//                                     }
//                                     console.log('\t' + event + ' - Виконано');
//
//                                 });
//
//                             });
//
//                         });
//
//                     });
//
//                 });
//
//             });
//
//         });
//
//     });
//
// });


// Виконання за допомогою promise
function myDayEvent(event, error) {
    return new Promise((resolve, reject) => {
        console.log(event);
        let delay = Math.round(1000 * Math.random() + 1000);
        setTimeout(() => {
            console.log('\tВиконується - ' + delay / 1000 + ' s');
            parseInt(event) > parseInt(error) ? reject(error): resolve(event);
        }, delay);
    });
}

console.log('День почався:');
myDayEvent('8:00 Прокинутись', '8:00Проспав будильник')
.then(event => {
    console.log('\t' + event + ' - Виконано');
    return myDayEvent('9:00 Поснідати', '9:00 Нема часу їсти');
})
.then(event => {
    console.log('\t' + event + ' - Виконано');
    return myDayEvent('10:00 Поїхати до універу','10:00 Не встигнув на маршрутку');
})
.then(event => {
    console.log('\t' + event + ' - Виконано');
    return myDayEvent('11:00 Прийти на пару', '11:00 Пара вже почалась');
})
.then(event => {
    console.log('\t' + event + ' - Виконано');
    return myDayEvent('13:00 Пообідади', '13:00 Кормушка закрита');
})
.then(event => {
    console.log('\t' + event + ' - Виконано');
    return myDayEvent('15:00 Поїхати додому', '15:00 Не встигнув на трамвай');
})
.then(event => {
    console.log('\t' + event + ' - Виконано');
    return myDayEvent('17:00 Прийняти душ', '16:00 Виключили воду');
})
.then(event => {
    console.log('\t' + event + ' - Виконано');
    return myDayEvent('20:00 Дивитись лекцію в Okten', '20:00 Лекція вже почалась');
})
.then(event => {
    console.log('\t' + event + ' - Виконано');
    return myDayEvent('4:00 Закінчити домашку від Віті', '4:00 Ти заснув за ноутом');
})
.catch(error => {
    console.log('\t' + error + ' - Виконано');
})
.finally(() =>{
    console.log('День закінчився');
});