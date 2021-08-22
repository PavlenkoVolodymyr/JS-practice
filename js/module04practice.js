// // // function every(array, callback) {
// // //   for (let elem of array) {
// // //     let condition = callback(elem);
// // //     // console.log(condition);
// // //     result.push(condition)
// // //   }
// // // }

// // // console.log(results)
// // // // if (result.includes(false)){
// // // //   return false
// // // // }else{
// // // //   return true
// // // // }
// // // return results.includes(false) ? false:true

// // // let every([1, 11, 111, 2, 22, 33], getLessThenTen);

// // // function getLessThenTen(number) {
// // //   // if (number < 10) {
// // //   //   return true;
// // //   // } else {
// // //   //   return false;
// // //   // }
// // //   number < 10 ? true : false;
// // // }

// // //задача2//=====//=====//
// // function compact(array) {
// //   const newArray = [];
// //   for (let value of array) {
// //     console.log(Boolean(value));
// //     // if (Boolean(value)) newArray.push(value);
// //     callback(value, newArray);
// //   }
// //   return newArray;
// // }

// // function getFalsyValues(element, falsyValues) {
// //   if (!Boolean(value)) falsyValues.push(value);
// // }
// // function getNotFalsyValues(element, notFalsyValues) {
// //   if (Boolean(element)) notFalsyValues.push(element);
// // }

// // // console.log(compact([1, '', null, 'Hello']));
// // // console.log(compact([Infinity, ' ', {}, []]));
// // console.log(compact([1, 0, '', null, 'Hello'], getFalsyValues));
// // console.log(compact([Infinity, ' ', {}, []], getNotFalsyValues));

// // задача 3 // ====
// function showDeliveryStarus(array) {
//   let message;
//   message = `Done`;
//   message = `In progres`;
//   message = `Read to delivery`;
// }
// showDeliveryStarus(orderA);

const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter(e => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe);
console.log(firstInvoke);
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe);
console.log(secondInvoke);
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
