// console.log('Hello world')

// console.log('Учим')
// console.log('alert')
// console.log('Я учу JS')

//урока 3
// let age
// let myLifeStyle = 'freelance'
// console.log(myLifeStyle)

// let myAge = 36
// let myNewAge = 18
// myAge = myNewAge
// console.log(myAge)

// const myAge = 36
// console.log(myAge)

// let colorEyes
// let user
// let userName = 'Вася'
// user = userName
// console.log(user)

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   if (available > ordered) {
//     return 'The order is accepted, our manager will contact you';
//   }

//   // Change code above this line
// }

// Урок 04
// let userName;
// console.log(typeof userName);
// console.log(userName);

// userName = 'Фриланс по жизни';
// console.log(typeof userName);

// userName = 58;
// console.log(typeof userName);

// let trueOrFalse = 58 < 18;
// console.log(trueOrFalse);

// let userAge = 36;
// let userAgeInfo = `Возраст: ${userAge}`;
// console.log(userAgeInfo);

// Урок 05
// let x;
// x = 5 + 8;
// console.log(`Результат сложения: ${x}`);

// x = 9 - 5;
// console.log(`Результат вычитания: ${x}`);

// x = 2 * 3;
// console.log(`Результат умножения: ${x}`);

// x = 10 / 2;
// console.log(`Результат деления: ${x}`);

// x = 11 % 3;
// console.log(`Результат взятия остатка от деления: ${x}`);

// x = 5 ** 3;
// console.log(`Результат возведения в степень: ${x}`);

// let resultOne = 'Фрилансер' + ' ' + 'по' + ' ' + 'жизни';
// console.log(resultOne);

// resultOne = 'Фрилансер' + ' ' + 58;
// console.log(resultOne);
// console.log(typeof resultOne);

// resultOne = 2 + '2';
// console.log(resultOne);

// resultOne = 58 - 20 + ' ' + 'Фрилансер';
// console.log(resultOne);

// let users = '25';
// let admins = '10';
// console.log(users + admins);

// console.log(+users + +admins);
// //Более длинная запись
// console.log(Number(users) + Number(admins));

// let a = 1 + 2;
// let b = 2;

// let result = 8 - (a = b + 3);
// console.log('Результат в скобках: ' + a);
// console.log('Общий результат: ' + result);

// let resultOne = (resultTwo = resultThree = 1 + 2);
// console.log(resultOne);
// console.log(resultTwo);
// console.log(resultThree);

// let addUser = 2;
// addUser++;
// console.log(addUser);
// //или
// addUser = addUser + 1;
// //или
// addUser += 1;

// let removeUser = 2;
// removeUser--;
// console.log(removeUser);

// let usersCounter = 0;
// let newUsers = 2 * ++usersCounter;
// console.log(newUsers);
// //или
// let usersCounter = 0;
// ++usersCounter;
// let newUsers = 2 * usersCounter;
// console.log(newUsers);

// let usersCounter = (8 + 2, 19 + 1);
// console.log(usersCounter);
// console.log('Фрилансер' > 'фрилансер');

// let userName = '';
// let userNickName = 'Фриланс';
// let user = userName || userNickName || 'Без имени';
// console.log(user);

//Урок 06

// let message = 'Привет, фрилансер';
// if (2 > 1) {
//   console.log(message);
// }

// let message = 'Привет, фрилансер';
// let first = 5;
// let second = 5;
// if (first === second) {
//   console.log(message);
// }

// let message = 'Привет, фрилансер';
// if (2 > 1) console.log(message);

// let message = 'Привет, фрилансер';
// let number = 5;
// if (number > 10) {
//   console.log(message);
// } else {
//   console.log('Условие не выполнено :(');
// }

// let message = 5 > 10 ? 'Hello, Ira' : 'Hello, Vova';
// console.log(message);

// const planets = ['Earth', 'Mars', 'Venus'];

// for (const planet of planets) {
//   console.log(planet);
// }

// function includes(array, value) {
//   // Change code below this line
//   for (let value of array) {
//     if (value === array[value]) {
//       return true;
//     }
//     return false;
//   }
//   // Change code above this line
// }
// Урок 07
// let num = 0;
// while (num < 5) {
//   console.log(num); // 0 1 2 3 4
//   num++;
// }

// let num = 5;
// while (num) {
//   console.log(num); // 5 4 3 2 1
//   num--;
// }

// let num = 0;
// do {
//   console.log(num); // 0 1 2 3 4
//   num++;
// } while (num < 5);

// for (let num = 0; num < 5; num++) {
//   console.log(num); // 0 1 2 3 4
// }

// let num = 0;
// for (; num < 5; num++) {
//   console.log(num); // 0 1 2 3 4
// }

// let num = 0;
// for (; num < 5; num++) {
//   console.log(num); //0 1 2
//   if (num == 2) break;
// }
// console.log(`Работа оконченвa, num = ${num}`);

// let num = 0;
// for (; num < 5; num++) {
//   if (num == 2) continue;
//   console.log(num); // 0 1  3 4
// }

// firstFor: for (let num = 0; num < 2; num++) {
//   for (let size = 0; size < 3; size++) {
//     if (size == 2) {
//       break firstFor;
//     }
//     console.log(size); // 0 1
//   }
// }

// let num = 0;
// while (num < 3) {
//   console.log(`Число: ${num}`); // Число: 0   Число:1     Число:2
//   num++;
// }

// for (let num = 0; num < 2; num++) {
//   if (num === 1) break;
//   for (let size = 0; size < 3; size++) {
//     console.log(size);
//   }
// }

//Урок 08
// function getSumm() {
//   let numOne, numTwo;

//   function getNumOne() {
//     numOne = 1;
//   }
//   function getNumTwo() {
//     numTwo = 2;
//   }
//   getNumOne();
//   getNumTwo();

//   let numSumm = numOne + numTwo;
//   console.log(numSumm);
// }

// getSumm();

// function calcSumm(numOne, numTwo) {
//   console.log(`Переменная numOne:${numOne}`);
//   console.log(`Переменная numTwo:${numOne}`);

//   let numSumm = numOne + numTwo;

//   console.log(`Сумма: ${numSumm}`);
// }

// calcSumm(1, 2);

// function calcSumm(numOne, numTwo, more, less) {
//   let numSumm = numOne + numTwo;

//   if (numSumm > 3) {
//     more();
//   } else {
//     less();
//   }
// }

// function showMoreMessage() {
//   console.log(`больше чем 3`);
// }
// function showLessMessage() {
//   console.log(`меньше чем 3`);
// }
// calcSumm(1, 5, showMoreMessage, showLessMessage);

// function calcSumm(numOne, numTwo) {
//   let numSumm = numOne + numTwo;

//   return numSumm;
// }

// let funcRezult = calcSumm(1, 2);
// console.log(`Сумма: ${funcRezult}`);

// function calcSumm(numOne, numTwo) {
//   let result = 1;
//   for (let i = 0; i < numTwo; i++) {
//     result *= numOne;
//   }
//   return result;
// }
// console.log(calcSumm(2, 3));
// ---------
// function calcSumm(numOne, numTwo) {
//   if (numTwo === 1) {
//     return numOne;
//   } else {
//     return numOne * calcSumm(numOne, numTwo - 1);
//   }
// }
// console.log(calcSumm(2, 3));

// let getMessage = (text, name) => {
//   let message = text + ',' + name + '!';
//   return message;
// };
// console.log(getMessage('Привет', 'Вася'));

// function showNumber(num) {
//   console.log(num);
//   if (num < 5) {
//     setTimeout(showNumber, 1000, ++num);
//   }
// }
// setTimeout(showNumber, 1000, 1);

// function showName() {
//   console.log('Вася');
// }
// setTimeout(showName, 1000);
// console.log('Коля');
