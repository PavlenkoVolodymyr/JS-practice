class Shop {
  #items;
  constructor(items, title, adress) {
    this.#items = items;
    this.title = title;
    this.adress = adress;
  }
  #generateId() {
    // console.log('id');
    return Math.random().toString().slice(2) + 1;
  }

  showInfo() {
    console.log(`${this.title}, ${this.adress}`);
  }

  showItems() {
    for (let item of this.#items) {
      let { id, name: productName, price: productPrice, category } = item;
      console.log(`Id:${id} ${productName}, ${productPrice}, ${category}`);
    }
  }

  addItem(name, price, qty, category) {
    let newItem = {
      id: this.#generateId(),
      name,
      price,
      qty,
      category,
    };
    this.#items = [...this.#items, newItem];
  }

  updateItem(productName, newName) {
    if (this.findItem(productName)) {
      let item = this.findItem(productName);
      item.name = newName;
      return;
    }

    console.log(`${productName} не знайдено`);
  }

  removeItem(productName) {
    if (this.findItem(productName)) {
      let item = this.findItem(productName);
      const numberOfIndex = this.#items.indexOf(item);
      this.items.splice(numberOfIndex, 1);
      return;
    }
    console.log(`${productName} не знайдено`);
  }

  findItem(productName) {
    for (let item of this.#items) {
      if (productName === item.name) {
        return item;
      }
    }
    console.log(`${productName} не знайд��но`);
  }
}

let items = [
  { id: 'id-1', name: 'apples', price: 35, qty: 500, category: 'fruits' },
  { id: 'id-2', name: 'potato', price: 15, qty: 875, category: 'fruits' },
  { id: 'id-3', name: 'bananes', price: 27, qty: 400, category: 'fruits' },
  { id: 'id-4', name: 'tomatoes', price: 25, qty: 650, category: 'fruits' },
];
let silpo = new Shop(items, 'Silpo', 'Lviv');
// console.log(silpo);
// silpo.showInfo();
// silpo.showItems();
silpo.addItem('pear', 30, 300, 'fruits');
// silpo.updateItem('apples', 'gold apples');
// silpo.removeItem('tomatoes');
silpo.showItems();
// console.log(silpo.#items);
// console.log(silpo.title);
