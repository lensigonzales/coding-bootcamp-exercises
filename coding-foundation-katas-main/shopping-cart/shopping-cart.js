class ShoppingCart {
  constructor() {
    this.shoppingCartArray = [];
  }

  addToCart(desc, pri, quan) {
    //items hinzufügen, items = description, price, quantity

    const item = {
      description: desc,
      price: pri,
      quantity: quan,
    };

    return this.shoppingCartArray.push(item);
  }

  getCartPrice() {
    let price = 0;
    //durch die shoppingCartArray iterieren und von jedem objekt auf price zugreifen und aufaddieren

    for (let item of this.shoppingCartArray) {
      price += item.price * item.quantity;
    }
    return price;
  }
  removeFromCart(desc, quan) {
    //an welcher Position ist description = desc? im shoppingCartArray
    //shoppingCartArray.splice(Position, 1)
    //wenn die quan == value von quantity --> komplette object-item löschen
    //greife auf den key "quantity" zu, wenn die description === desc
    //dann item.quantity - quan

    this.shoppingCartArray.forEach((item, index) => {
      if (
        (quan === undefined && item.description === desc) ||
        (item.description === desc && item.quantity === quan)
      ) {
        this.shoppingCartArray.splice(index, 1);
      } else if (item.description === desc) {
        item.quantity -= quan;
      }
    });

    return this.shoppingCartArray;
  }
}
