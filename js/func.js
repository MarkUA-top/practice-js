// функція це обгортка інструкцій які стосуються однієї дії;
// їх створюємо для перевекористання кода
// перший спосіб створення(оголошення) функції-function deckaration

// function назваФункції (параметри){
//     тіло функції
//     return значення яке має повернути функція як результат
// }

// виклик фунціх:
// назваФункції(аргументи)

// function test() {
//   console.log("My first function");
// }

// test();

// function countSum(number1, number2) {
//   const result = number1 + number2;
//   const message = `загальна сума чисел вийшлв ${result}`;
//   return message;
// }

// const sum = countSum(83, 51);

// console.log(sum)

// console.log(countSum(73, 14))

// function isEven(number) {
//  if (number % 2 === 0){
//     return true
//  } else {
//     return false
//  }
// }

// function isEven(number) {
//   return number % 2 === 0;
// }

// const isEven = (number) => number % 2 === 0

// console.log(isEven(46));

// Напиши функцію яка повертає найбільше число в масиві:
// let array = [1, 3, 2, 5, 4];
// let max = findMaxNumber(array);
// console.log(max); // 5
//  У цій функції ми проходимо по масиву чисел та знаходимо найбільше число.
//  Його повертаємо як результат функції.

// function findMaxNumber(array) {
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// }

// const array = [1, 3, 2, 5, 4, 41];
// let max = findMaxNumber(array)
// console.log(max)

// function hello1() {
//   return "Привіт JavaScript";
// }
// const hiJs = hello1();
// console.log(hiJs);

// Напишіть функцію mul(n, m), яка приймає два аргументи і повертає добуток,
//  суму і різницю цих аргументів.
//  Перевірте її робот

// function mul(n, m) {
//     const product = n * m;
//     const sum = n + m;
//     const difference = n - m;
//     return [product, sum, difference];
// }

// let n = 17;
// let m = 5;
// let result = mul(n, m);

// console.log("Добуток:", result[0]);
// console.log("Сума:", result[1]);
// console.log("Різниця:", result[2]);

// function mul(n, m) {
// return `Добуток: ${n * m}, Сума: ${n + m}, Різниця: ${n - m}`;
// }

// console.log(mul(17, 5))

// Напиши функцію myAverageScore , яка у якості аргументу отримує масив з оцінками,
//  і виводить користувачу його середній результат у наступному форматі:
// Myaveragescore: A (якщо середня оцінка від 91 до 100)
// My average score: B (якщо середня оцінка від 81 до 90)
// My average score: C (якщо середня оцінка від 71 до 80)
// My average score: D (якщо середня оцінка від 70 і менше)
// Для перевірки:
// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));
// console.log(myAverageScore([93, 99, 93, 96]));

function myAverageMark(mark) {
  // крок 1 додаєму числа з масива
  let sum = 0;
  for (let i = 0; i < mark.length; i++) {
    sum += mark[i];
  }
  // крок 2 ділему суму нна кількісь оцінок з масива
  let average = sum / mark.length;
  // крок 3 виводимо середній бал
  if (average >= 91 && average <= 100) {
    return `My mark: A and ${average} averge mark`;
  } else if (average >= 81 && average <= 90) {
    return `My mark: B and ${average} averge mark`;
  } else if (average >= 71 && average <= 80) {
    return `My mark: C and ${average} averge mark`;
  } else {
    return `My mark: D and ${average} averge mark`;
  }
}

console.log(myAverageMark([100, 75, 81, 96]));
console.log(myAverageMark([45, 63, 85, 70]));
console.log(myAverageMark([77, 82, 60, 58]));
console.log(myAverageMark([93, 99, 93, 96]));