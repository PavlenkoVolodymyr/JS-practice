// // function highOrder(value, callback) {
// //   callback(value);
// // }
// // highOrder(`Hello, I am callback`, setMessage);

// // function setMessage(message) {
// //   // console.log(message);
// // }

// // function toDoMeal(prods, zzz) {
// //   // console.log(prods);
// //   let result = zzz(prods);
// //   console.log(result);
// //   // console.log(`Your dish - `);
// // }
// // toDoMeal(['bread', 'meat'], toDoSandwich);
// // toDoMeal(['banana', 'orange'], toDoSandwich);

// // function toDoSandwich(arr) {
// //   // console.log(arr);
// //   let bread = arr.includes('bread');
// //   // console.log(bread);
// //   return bread ? 'sandwich is done!' : `no bread `;
// // }

// // //=====EXAMPLE 2 =======
// // const result = [{ mail: '', scores: 10 }];
// // function getResultsByTests(getMax, getMin, mail, ...scores) {
// //   console.log(mail);
// //   console.log(scores);
// //   let total = 0;
// //   for (let i of scores) {
// //   total += i;
// // }
// // // console.log(total);
// // const obj = { mail, scores: total };
// // result.push(obj);
// // console.log(result);
// // }
// // getResultsByTests(getMaxValue, getMinValue, 'a@gmail.com', 1, 1, 1, 1, 1, 1, 1);

// // function getMaxValue() {}
// // function getMinValue() {}

// //=====EXAMPLE 2 =======
// let firstNum = 10000;
// const getF = (count, callback) => {
//   let firstNum = 0;
//   let secondNum = 1;
//   const arrWithValues = [firstNum, secondNum];
//   console.log(arrWithValues);
//   for (let i = 3; i <= count; i++) {
//     let newNumber = firstNum + secondNum;
//     arrWithValues.push(newNumber);
//     console.log(newNumber);
//     firstNum = secondNum;
//     secondNum = newNumber;
//   }
//   console.log(arrWithValues);
//   // callback(count);
//   // console.log(firstNum);
//   return arrWithValues;
// };
// getF(18);

// function getEvenValues(arr) {
//   for (let num of arr) {
//     if (num % 2 === 0) {
//       arrValues.push(num);
//     }
//   }
//   return arrValues;
// }
// function getSum(arr) {
//   let total = 0;
//   for (let i of arr) {
//     total += i;
//   }
//   return total;
// }
// // console.log(firstNum);

//Call Stack ========
function first() {
  console.log(`this is 1 function STARTED`);
}
// ========//
