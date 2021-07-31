const product = {
  name: '',
  price: 0,
  quantity: 0,

  showName() {
    console.log(this.name);
  },
  showPrice() {
    console.log(this.price);
  },
  showQuantity() {
    console.log(this.quantity);
  },
  chengeName(value) {
    return (this.name = value);
  },
  chengePrice(value) {
    return (this.price = value);
  },
  chengeQuantity(value) {
    return (this.quantity = value);
  },
};
console.log(product);

product.showName();
product.showPrice();
product.showQuantity();

product.showName('Peach');
console.log(product);
