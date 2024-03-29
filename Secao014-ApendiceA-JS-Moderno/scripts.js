/* ---------- 1- var, let, const ---------- */

var x = 10;
var y = 15;

if (y > 0) {
  var x = 5;
  console.log(x);
}

console.log(x);

let a = 10;
let b = 15;

if (b > 10) {
  let a = 5;
  console.log(a);
}

console.log(a);

let i = 100;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

function logName() {
  const name = "Matheus";
  console.log(name);
}

const name = "Pedro";

logName();

console.log(name);

/* ---------- 2- Arrow Functions ---------- */

const sum = function sum(a, b) {
  return a + b;
};

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name) => {
  if (name) {
    return "Ola " + name + "!";
  } else {
    return "Ola!";
  }
};

console.log(greeting());
console.log(greeting("Joao"));

const testArrow = () => console.log("testou");

testArrow();

const user = {
  name: "Theo",
  sayUserName() {
    var self = this;
    setTimeout(function () {
      console.log(self);
      console.log("Username: " + self.name);
    }, 500);
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this);
      console.log("Username: " + this.name);
    }, 700);
  },
};

/*
Comentado para nao atrapalhar no log, por ser timeOut

user.sayUserName();
user.sayUserNameArrow() 
*/

/* ---------- 3- Filter ---------- */

const arr = [1, 2, 3, 4, 5];

const highNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});

console.log(highNumbers);

const users = [
  { name: "Matheus", avaliable: true },
  { name: "Pedro", avaliable: false },
  { name: "Joao", avaliable: false },
  { name: "Marcos", avaliable: true },
];

const avaliableUsers = users.filter((user) => user.avaliable);
const notAvaliableUsers = users.filter((user) => !user.avaliable);

console.log(avaliableUsers);
console.log(notAvaliableUsers);

/* ---------- 4- Map ---------- */

const products = [
  { name: "Camisa", price: 10.99, category: "Roupas" },
  { name: "Chaleira", price: 40.99, category: "Eletro" },
  { name: "Fogao", price: 400.99, category: "Eletro" },
  { name: "Calca Jeans", price: 62.99, category: "Roupas" },
];

products.map((product) => {
  if (product.category === "Roupas") {
    product.onSale = true;
  }
});

console.log(products);

/* ---------- 5- Templates literals ---------- */

const userName = "Joao Filipe";
const age = 34;

/* Modo Vanilla
console.log("O nome do usuario eh " + userName + ", e ele tem " + age + " anos.") 
*/

console.log(`O nome do usuario eh ${userName}, e ele tem ${age} anos.`);

/* ---------- 6- Destructuring ---------- */

const fruits = ["maca", "laranja", "mamao"];

const [f1, f2, f3] = fruits;

console.log(f2);

const productDetail = {
  name: "Mouse",
  price: 39.99,
  category: "Perifericos",
  color: "cinza",
};

const {
  name: productName,
  price,
  category,
  color: productColor,
} = productDetail;

console.log(
  `O nome do produto eh ${productName}, ele custa R$${price}, pertence a categoria de ${category}, e tem na cor ${productColor}`
);

/* ---------- 7- Spread Operator ---------- */

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

const a4 = [0, ...a1, 4];

console.log(a3);
console.log(a4);

const carName = { name: "Gol" };
const carBrand = { brand: "VW" };
const otherInfos = { km: 10000, price: 49000 };

const car = { ...carName, ...carBrand, ...otherInfos, wheels: 4 };

console.log(car);

/* ---------- 8- Classes ---------- */

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product("Camisa Gola V", 20);

console.log(shirt.name);
console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(50));

const tenis = new Product("tenis verde", 120);

console.log(tenis.productWithDiscount(20));

/* ---------- 9 - Herança ---------- */
/* Aplicando na aula 8 */

class productWithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }
  showColors() {
    console.log("As cores sao:");
    this.colors.forEach((color) => {
      console.log(color);
    });
  }
}

const hat = new productWithAttributes("Chapeu", 29.99, [
  "preto",
  "azul",
  "verde"
]);

console.log(hat.name)
console.log(hat.productWithDiscount(30))
hat.showColors()