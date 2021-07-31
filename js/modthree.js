// // // // console.log({});

// // // // const obj = {
// // // //   // props (key: value,)
// // // //   prop_a: 'A',
// // // //   prop_b: 'B',
// // // //   prop_c: 2,
// // // //   age: 31,
// // // //   name: 'Vova',
// // // //   isOnLine: false,
// // // //   musi: {
// // // //     band: ['Bi-2'],
// // // //     songs: ['hdfash'],
// // // //   },
// // // //   // methods
// // // //   showName() {
// // // //     console.log('Hello');
// // // //   },
// // // // };
// // // // console.log(obj);

// // // // // console.log('name:', obj.name);
// // // // // console.log(obj['name']);
// // // // // obj.showName();

// // // // console.log(obj.age);
// // // // obj.age = 18;
// // // // console.log(obj.age);

// // // // // console.log(obj.languages);
// // // // obj.languages = ['ukranian'];
// // // // // console.log(obj.languages);

// // // // delete obj.age;
// // // // // console.log(obj.age);
// // // // // console.log(obj);

// // // // let age = 30;

// // // // const myUser = {
// // // //   age,
// // // // };
// // // // // console.log(myUser);

// // // // let key1 = 'userName';
// // // // let key2 = 'lastName';
// // // // let key3 = 'skills';
// // // // const nextUser = {
// // // //   [key1]: 'user',
// // // // };
// // // // console.log(nextUser);

// // // ///destructuring///

// // // const product = {
// // //   title: 'mask',
// // //   prise: 100,
// // //   values: ['50ml', '30ml', '100ml'],
// // // };

// // // function showTitle(name) {
// // //   console.log(`title product is ${name}`);
// // // }
// // // showTitle('Parfum');
// // // console.log(product.title);
// // // showTitle(product.title);
// // // const { title: myTitle } = product;
// // // showTitle(myTitle);

// // // const products = {
// // //   parfums: {
// // //     male: [
// // //       {
// // //         title: 'Jadore',
// // //         name: 'Dior',
// // //         price: 3000,
// // //       },
// // //     ],
// // //     femle: [
// // //       {
// // //         title: 'Jadore',
// // //         name: 'Dior',
// // //         price: 2800,
// // //       },
// // //     ],
// // //   },
// // //   masks: {},
// // // };
// // // console.log(products.parfums.femle[0].title);

// // //==========
// // const rgb = [255, 39, 45];
// // console.log(rgb);

// // // const [] = array;

// // const [red, green, blue] = rgb;
// // console.log('red', red);
// // console.log('greened', green);
// // console.log('blue', blue);

// //======//
// /// spread-rest ///
// //======//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 84];
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

// function getResult(a, b) {
//   let total = 0;
//   console.log(arguments);
//   const nums = [...arguments];

//   for (let num of nums) {
//     total += num;
//   }

//   total = a + b;
//   return total;
// }
// console.log(getResult(2, 5, 4, 6));
