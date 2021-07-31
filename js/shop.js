// CRUD

/*
C -create
R -read
U -update
D -delete
*/

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
  // addItem(newItem) {
  //     this.items.push(newItem)
  //   },

  // addItem(newItem) {
  //   this.items= [...this.items, newItem]
  // },

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

  //   update
  updateItem(productName, newName) {
    if (this.findItem(productName)) {
      let item = this.findItem(productName);
      //   console.log(item);
      item.name = newName;
    }
  },

  // update
  // updateItem(productName, newName) {
  //   for (let item of this.items) {
  //       // console.log(item);
  //     if (item.name === productName) {
  //       // console.log(item.name);
  //       item.name = newName
  //     }

  //   }
  //   console.log(`${productName} не знайдено`);
  //   },

  //   updateItem(productName, newName) {
  //     for (let i = 0; i < this.items.length; i += 1) {
  //       //   console.log(this.items[i].name);
  //       if (productName === this.items[i].name) {
  //         this.items[i].name = newName;
  //         return;
  //       }
  //     }
  //     console.log(`${productName} не знайдено`);
  //   },

  //delete
  removeItem(productName) {
    if (this.findItem(productName)) {
      let item = this.findItem(productName);
      const numberIndex = this.items.indexOf(item);
      //   console.log(numberIndex);
      this.items.splice(numberIndex, 1);
    }
  },

  //   removeItem(productName) {
  //     for (let i = 0; i < this.items.length; i++) {
  //       if (productName === this.items[i].name) {
  //         this.items.splice(i, 1);
  //         return;
  //       }
  //     }
  //     console.log(`${productName} не знайдено`);
  //   },

  //   removeItem(productName) {
  //     for (let item of this.items) {
  //       if (productName === item.name) {
  //         // console.log('Нашли', productName);
  //         const numberIndex = this.items.indexOf(item);
  //         // console.log('numberIndex: ', numberIndex);
  //         this.items.splice(numberIndex, 1);
  //       }
  //     }
  //     console.log(`${productName} не знайдено`);
  //   },

  findItem(productName) {
    for (let item of this.items) {
      if (productName === item.name) {
        //   console.log(item);
        return item;
      }
    }
    console.log(`${productName} не знайдено`);
  },
};

// shop.showInfo()

// const newItem = { id: 'id-5', name: 'mango', price: 30, qty: 250, category: 'fruits' }
// const newItem = { id: 'id-5', name: 'mango', price: 30, qty: 250, category: 'fruits' }
shop.addItem('id-5', 'orange', 30, 250, 'fruits');
// shop.updateItem('bananes', 'gold bananas');
// shop.updateItem('bananes', 'black bananas');
shop.removeItem('potato');
// shop.findItem('tomatoes');
shop.showItems();
