// function Car(brand, color, speed, number) {
//    this.brand = brand;
//    this.color = color;
//    this.speed = speed;
//    this.number = number;
// }

class Car {
   constructor(brand, color, speed, number) {
      this.brand = brand;
      this.color = color;
      this.speed = speed;
      this.number = number;
   }
   
   // Car.prototype.drive = function() {
   drive() {
      console.log(`${this.brand} ${this.color} is driving.`);
   }
   
   // Car.prototype.reverse = function() {
   reverse() {
      console.log(`${this.brand} ${this.color} is reversing.`);
   }
   
   // Car.prototype.turn = function() {
   turn() {
      console.log(`${this.brand} ${this.color} is turning.`);
   }
}


const mycar = new Car('Alphart Vellfire', 'White', '1000cc', 'DK 1298 RR');
const friendcar = new Car('Lamborghini Aventador', 'Orange', '2000cc', 'B 2131 MM');
const familycar = new Car('Jeep Wrangler Rubicon', 'Black', '4000cc', 'AB 1345 GG');

console.log(mycar, friendcar, familycar);
console.log(typeof(Car));

mycar.drive();
friendcar.reverse();
familycar.turn();