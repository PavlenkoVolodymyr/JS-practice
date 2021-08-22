// function sum(a, b) {
//   return a + b;
// }
// function mult(a, b) {
//   return a * b;
// }
// function sub(a, b) {
//   return a - b;
// }
// function div(a, b) {
//   sum;
//   return a / b;
// }

// function calculator(a, b, clb) {
//   return clb(a, b);
// }

// let result = calculator(4, 10, sub);
// console.log(result);

/// 2

// function greet(msg) {
//   console.log('Hello ' + msg);
// }

// function sayHello(callback) {
//   return callback;
// }
// sayHello(greet('World'));

///  3
// function frameWorkGenertor() {
// let frameWorks = ['Vue', 'Angular'];
// return {
//   showInfo() {
//     console.log(frameWorks);
//   },
//   addFrameWork(newItem) {
//     frameWorks.push(newItem);
//   },
// };
// }
// let generator = frameWorkGenertor();
// // console.log(generator);
// generator.showInfo();
// generator.addFrameWork('react');
// generator.showInfo();

// function customPush(...rest) {
//   let ar = [...this, ...rest];
//   return ar;
// }
// let myArray = [1, 2, 3, 4, 5, 6];

// // console.log(myPush(myArray, 10, 20, 30, 'Vova', 'Sara'));
// Array.prototype.myPush = customPush;
// myArray.myPush('Vera');
// console.log(myArray);

/// classes /=======//

let items = [
  { id: 'id-1', name: 'apples', price: 35, qty: 500, category: 'fruits' },
  { id: 'id-2', name: 'potato', price: 15, qty: 875, category: 'fruits' },
  { id: 'id-3', name: 'bananes', price: 27, qty: 400, category: 'fruits' },
  { id: 'id-4', name: 'tomatoes', price: 25, qty: 650, category: 'fruits' },
];

let shop = {
  // items: items,
  items,

  title: 'Silpo',
  adress: 'Kyiv',

  showInfo() {
    console.log(`${this.title}, ${this.adress}`);
  },

  // read
  showItems() {
    for (let pizza of this.items) {
      console.log(`${pizza.name}, ${pizza.price}, ${pizza.category}`);
    }
  },

  // create

  addItem(id, name, price, qty, category) {
    let newItem = {
      id,
      name,
      price,
      qty,
      category,
    };
    this.items = [...this.items, newItem];
  },

  // update
  updateItem(productName, newName) {
    if (this.findItem(productName)) {
      let item = this.findItem(productName);
      item.name = newName;
      return;
    }

    console.log(`${productName} не знайдено`);
  },

  //delete

  removeItem(productName) {
    if (this.findItem(productName)) {
      let item = this.findItem(productName);
      const numberOfIndex = this.items.indexOf(item);
      this.items.splice(numberOfIndex, 1);
      return;
    }
    console.log(`${productName} не знайдено`);
  },

  findItem(productName) {
    for (let item of this.items) {
      if (productName === item.name) {
        return item;
      }
    }
    console.log(`${productName} не знайдено`);
  },
};
shop.addItem('id-5', 'pear', 30, 300, 'fruits');
shop.updateItem('apples', 'gold apples');
shop.removeItem('tomatoes');
shop.showItems();
