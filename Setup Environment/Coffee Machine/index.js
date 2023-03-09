// const { coffeeStock, isCoffeeMachineReady } = require('./state');

// const makeCoffee = (type, miligrams) => {
//    if (coffeeStock[type] >= miligrams) {
//       console.log("Kopi berhasil dibuat!");
//    } else {
//       console.log("Biji kopi habis!");
//    }
// }

// console.log(coffeeStock);
// console.log(isCoffeeMachineReady);

// makeCoffee("robusta", 80);

import { coffeeStock as stock, isCoffeeMachineReady } from "./state.js";

const displayStock = stock => {
   for (const type in stock) {
      console.log(type);
   }
}

displayStock(stock);
console.log(stock);
console.log(isCoffeeMachineReady);