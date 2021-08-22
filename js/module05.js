// function StringBuilder() {
//   this.value = value;
// }
// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };
// StringBuilder.prototype.padEnd = function (newValue) {
//   this.value.push(newValue);
// };
// StringBuilder.prototype.padStart = function (newValue) {
//   this.value.unshift(newValue);
// };
// StringBuilder.prototype.padBoth = function (newValue) {
//   this.value.unshift(newValue);
// };

// Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

//====
// function StringBuilder() {
//   this.value = value;
// }
// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };
// StringBuilder.prototype.padEnd = function (str) {
//   this.value = this.value + str;
// };
// StringBuilder.prototype.padStart = function (str) {
//   this.value = str + this.value;
// };
// StringBuilder.prototype.padBoth = function (str) {
//   this.value = this.value + str + this.value;
// };

// Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

/// CONSTRUCTOR
// function Post(title = 'title', text = 'Lorem ipsum dolor...') {
//   this.tite = title;
//   this.text = text;
// }

// Post.prototype.updateTitle = function (value) {
//   return (this.title = value);
// };

// const post1 = new Post();
// console.log(post1);

// function NewPost(imegeUrl, title, text) {
//   Post.apply(this, [title, text]);
//   this.image = imageUrl;
// }

// console.log(NewPost.prototype);
// NewPost.prototype = Object.create(Post.prototype);
// NewPost.prototype.constructor = NewPost;

// NewPost.prototype.updateImage = function (url) {
//   return (this.image = url);
// };

// const NewPost1 = new NewPost();
//задание 16
// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return 'Внимание! Цена превышает допустимую.';
//     } else {
//       return 'Всё хорошо, цена в порядке.';
//     }
//   }
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// задание 19
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки
// blacklistedEmails = [];
//   blacklist(email){
//     this.blacklistedEmails.push(email);
//   }
//     isBlacklisted(email){
//     return this.blacklistedEmails.includes(email);
//     }
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   accessLevel;

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true

// занятие
