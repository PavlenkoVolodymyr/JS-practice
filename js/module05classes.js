// // class Class {
// //   constructor(prop1 = 0, prop2 = 1) {
// //     this.prop1 = prop1;
// //     this.prop2 = prop2;
// //   }
// //   method1() {
// //     console.log(this.prop1);
// //   }
// //   method2() {
// //     return (this.prop2 = value);
// //   }
// // }

// class User {
//   constructor(login, password) {
//     this.login = login;
//     this.password = password;
//   }
//   showLogin() {
//     console.log(this.login);
//   }
// }

// const user1 = new User('user1', 'qwerty');
// // console.log(user1);

// class NewUser extends User {
//   constructor(name, age, login, password) {
//     super(login, password);
//     this.name = name;
//     this.age = age;
//   }
//   updateAge() {
//     return (this.age += 1);
//   }
// }

// const newUser1 = new NewUser('Anatolit', 18, 'Tolik', 'qefcd');
// // console.log(newUser1);
// // console.log(newUser1.updateAge());
// // newUser1.showLogin();

// class BaseProduct {
//   constructor(title, price) {
//     this.title = title;
//     this._price = price;
//   }
//   get getPrice() {
//     return this._price;
//   }
//   set setPrice(value) {
//     return (this._price = value);
//   }
//   get title() {
//     return this._title;
//   }
//   set title(value) {
//     return (this._this = value);
//   }
// }

// const baseProduct = new BaseProduct('Banana', 25);
// // console.log(baseProduct);
// // console.log('свойства _price', baseProduct._price);
// // console.log('by getter price', baseProduct._price);
// baseProduct.price = 35;
// // console.log('by getter price', baseProduct.price);

// class Comment {
//   static name = 'Anonim';
//   constructor(author, text) {
//     this.author = this.author;
//     this.text = text;
//   }
// }
// const comment1 = new Comment('Pushkin', 'Lorem ipsum dolor');
// console.log(comment1);
// console.log(comment1.author);
// console.log(comment1.text);

class BaseProduct {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    return (this._price = value);
  }
}

class WeightProduct extends BaseProduct {
  constructor(weight, name, price, category) {
    super(name, price, category);
    this.weight = weight;
  }
  getTotalCost() {
    console.log(this.weight * this._price);
  }

  decrWeight(value) {
    if (this.weight - value <= 0) {
      console.log('товара недостаточно на скаладе');
    }
  }
}
const weightProduct = new WeightProduct(2.5, 'Lemon', 30, 'friuts');
weightProduct.getTotalCost();
console.log(weightProduct);
