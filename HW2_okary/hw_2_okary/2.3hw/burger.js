//Переписала ваш код с помощью видео, но все равно консоль ругается и бургер не собирается(( 
  //не получается вытащить price из класса бургера

class Param {
  name = '';
  price = 0;
  calories = 0;

  applyData(element) {
    this.name = element.value;
    let {price = 0, cal = 0} = Burger.burgerParams[this.name];
    this.price = price;
    this.calories = cal;
    return this;
  }
}

class Burger {
  static burgerParams = {
    big: {
      price: 100,
      cal: 40
    },
    small: {
      price: 50,
      cal: 20
    },
    salad: {
      price: 20,
      cal: 5
    },
    cheese: {
      price: 10,
      cal: 20
    },
    potato: {
      price: 15,
      cal: 10
    },
    mayonez: {
      price: 20,
      cal: 5
    },
    spice: {
      price: 15,
      cal: 0
    }
  };

  constructor(size, add, topping) {
    this.size = new Param().applyData(this.select(size));
    this.add = new Param().applyData(this.select(add));
    this.toppings = this.getToppings(topping);
  }

  getToppings(name) {
    return this.selectAll(name).map(el => new Param().applyData(el));
  }

  select(name) {
    return document.querySelector(`input[name="${name}"]:checked`);
  }

 selectAll(name) {
    return [...document.querySelectorAll(`input[name="${name}"]:checked`)];
  }

  sumPrice() {
    let result = this.size.price + this.add.price;
    this.toppings.forEach(el => result += el.price);
    return result;
  }

  sumCalories() {
    let result = this.size.calories + this.add.calories;
    this.toppings.forEach(el => result += el.calories);
    return result;
  }

  //получаем id-шники спанов и вставляем в них текст итого калорий и цена
  showSum(priceQuery, caloriesQuery) {
    document.querySelector(priceQuery).textContent = this.sumPrice();
    document.querySelector(caloriesQuery).textContent = this.sumCalories();
  }
}

