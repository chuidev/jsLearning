'use strict';

// let num = 50;

// --------------------- условия ---------------------

// if (num < 49) {
//   console.log('Неверно');
// } else if (num > 100) {
//   console.log('Много');
// } else {
//   console.log('Верно');
// }

// (num == 50) ? console.log('Верно') : console.log('Неверно'); // тернарный оператор

// switch (num) {
//   case num < 49 : 
//     console.log('Неверно');
//     break;
//   case num > 100 :
//     console.log('Много');
//     break;
//   case num >= 80 :
//     console.log('Все еще много');
//     break;
//     // case num == 50 : - Неверная запись
//   case 50 :
//     console.log('Верно');
//     break;
//   default :
//     console.log('что-то пошло не так');
//     break;
// }

// --------------------- циклы ---------------------

// Цикл для того, чтобы проверить, а потом сделать
// while (num < 55) {
//   console.log(num);
//   num++;
// }

// Цикл для того, чтобы сделать, а потом проверить
// do {
//   console.log(num);
//   num++;
// } while (num < 55);

// for (let i = 1; i < 8; i++) {
//   if (i == 6) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }

// let week = ['Monday', 'Thuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// for (let i = 0; i < week.length; i++) {
//   console.log(week[i]);
// }

let arr = ['21344', '12314', '32543', '72342', '42123', '79023'];

for (let i = 0; i < arr.length; i++) {
  if ((arr[i].substr(0,1) == 7) || (arr[i].substr(0,1) == 3)) {
    console.log(arr[i]);
  }
}