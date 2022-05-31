'use strict';

// ------------------------------ Функции ------------------------------

// let num = 20;

// function showFirstMessage(text) {
//   alert(text);
//   let num = 10;
//   console.log(num);
// }

// showFirstMessage('Привет');

// console.log(num);

// var calc = function(a, b) {
//   return (a + b);
// }

// let calc = (a, b) => a + b;

// console.log(calc(3, 4));
// console.log(calc(8, 4));

// function retVar() {
//   let num = 50;
//   return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str = 'test';
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = '12.2px';

// // console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));

// -------------------------- Дополнительное задание --------------------------

// есть str = “урок-3-был слишком легким”
// Сделать так, чтобы строка начиналась с большой буквы

// let str = 'урок-3-был слишком легким',
//     first = str.charAt(0),
//     firstChanged = first.toUpperCase(),
//     word = /-/gi,
//     newstr_3 = '';

// // console.log('Начальная строка: ' + str);

//   for (let i = 1; i < str.length; i++) {
//     firstChanged = firstChanged + str[i];
//     var newstr = firstChanged.replace(word, ' ');
//   }

// console.log('Замена первой буквы на ЗАГЛАВНУЮ:');
// console.log(firstChanged);
// console.log('');
// console.log('Замена "-"" на " "');
// console.log(newstr);

// let newWord = / легким/gi,
//     newstr_2 = newstr.replace(newWord, '');

// console.log('');
// console.log('Убрали слово "легким"');
// console.log(newstr_2);

// let dlina = newstr_2.length - 2;

// for (let i = 0; i < dlina; i++) {
//   newstr_3 = newstr_3 + newstr_2[i];
// }

// console.log('');
// console.log('Замена последних двух букв на "о"')
// console.log(newstr_3 + 'оо');

// // Вывести в консоль квадратный корень из суммы кубов его элементов (Да, человека нужно исключить)
// let arr = [20, 33, 1, 'Человек', 2, 3],
//     arr2 = [],
//     sum = 0;
    
// for (let i = 0; i < arr.length; i++) {
//   if ( typeof(arr[i]) === 'string' ) {
//     arr.splice(i, 1);
//   }
//   sum = sum + (arr[i] ** 3);
//   arr2.push(arr[i] ** 3);
// }

// console.log('');
// console.log('Начальный массив:');
// console.log(arr);

// console.log('');
// console.log('Массив с элементами в кубе:');
// console.log(arr2);
// console.log('Сумма элементов в кубе: ' + sum);
// console.log('Квадратный корень из суммы элементов в кубе: ' + Math.sqrt(sum));

function func(text) {
  let dlina = text.length - 2;

  if ( typeof(text) != 'string' && text[0] == ' ' && text[text.length - 1] == ' ') {
    alert('Функции передана не строка');
  } else {
    console.log('Передана строка:');
    console.log(text);
    alert(text.substr(1, dlina));
  }

  if ( text.length > 5) {
    console.log(text.slice(0, 5) + '...');
  } else {
    console.log('длина строки меньше 5 символов');
  }
};

func(' 1 ');