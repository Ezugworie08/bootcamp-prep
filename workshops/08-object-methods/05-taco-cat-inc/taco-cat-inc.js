let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0
};

// YOUR CODE BELOW
tacoCatInc.currentInventory = function() {
  let sum = 0;

  for (let key in this) {
    if (typeof this[key] !== 'function') {
      let productType = this[key];
      for (let product in productType) {
        if (typeof productType[product] !== 'function'){
          let productInfo = productType[product];
          sum += (productInfo.cost * productInfo.quantity);
        }
      }
    }
  }

  return sum;
}

tacoCatInc.sale = function(order) {
  let price = 0;

  for (let key in order) {
    if (this.hasOwnProperty(key)) {
      let 
        productType = key,
        product = order[key];

      price += this[productType][product].cost;
      this[productType][product].quantity -= 1;
      this.cash += this[productType][product].cost;
    }
  }
  return price;
}