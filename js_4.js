'use strict';

// let obj = new Object(); //Этот метод устаревший

// // Объявление объекта
// let options = {
//   width: 1024,
//   height: 1024,
//   name: 'test'
// };

// console.log(options.name);

// // Добавление свойства объекту
// options.bool = false;

// options.colors = {
//   border: 'black',
//   background: 'red'
// };

// // Удаление свойства из объекта
// delete options.bool;

// console.log(options);

// // Перебор объекта
// for (let key in options) {
//   console.log('Свойство ' + key + ' имеет значение ' + options[key]);
// }

// // Узнать количество свойств в объекте
// console.log(Object.keys(options));

// let arr = ['first', 2, 3, 'four', 5];
// arr[99] = 99;
// console.log(arr.length); // length выдает не количество элементов в массиве, а последний индекс + 1

// arr.pop(); // Удалить элемент массива с конца
// arr.push('5'); // Добавить элемент массива в конец
// arr.shift(); // Удалить элемент массива с начала
// arr.unshift('1'); // Удалить элемент массива в начале

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// // Перебор массива
// arr.forEach(function(item, index, mass){ //item - элементы, index - номер, arr - сам массив
//   console.log(index + ':  ' + item + ' (массив: ' + mass + ')');
// });

// console.log(arr);

// let mass = [1, 3, 4, 6, 7];

// for (let key in mass) {
//   console.log(key); // Возвращает порядковые номера элементов массива
// }

// for (let key of mass) {
//   console.log(key); // Возвращает элементы массива
// }

// let ans = prompt('', ''),
//     arr = [];

// arr = ans.split(',');

// console.log(arr);

// let arr = ['zzz', 'bbb', 'aaa', 'ddd'],
//     i   = arr.join('; ');

// console.log(arr); // Получим массив
// console.log(i);  // Получим строку

// Правильная сортировка чисел 
let arr = [1, 15, 4],
    i   = arr.sort(compareNum);

function compareNum(a, b) {
  return a - b;
}

console.log(arr); // Получим сортированный массив
// console.log(i);  // Получим строку