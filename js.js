'use strict';

let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD'),
    appData = {
      budget: money,
      timeData: time,
      expenses: {},
      optionalExpenses: {},
      income: [],
      savings: false
    };

for (let i=1; i<=2; i++) {
  let a = prompt('Введите обязательную статью расходов в этом месяце'),
      b = +prompt('Во сколько обойдется?');

  if (typeof(a) === 'string' && typeof(a) != null && a != ' ' &&
      typeof(b) === 'number' && typeof(b) != null && b != ' ') {
  
        appData.expenses[a] = b;
      } else {
        console.log('Введены неправильные данные');
      }
}

console.log('Массив данных: ');
console.log(appData);

console.log('Бюджет на 1 день: ' + parseInt(appData.budget/30));