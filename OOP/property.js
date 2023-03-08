class Laptop {
   constructor(merk, color, size, processor, ram) {
      this.merk = merk;
      this.color = color;
      this.size = '15 inc';
      this.processor = 'Ryzen 7 5000 Series';
      this.ram = '32 Gb';
   }

   gaming() {
      console.log(`${this.merk} dapat melibas seluruh game berat.`);
   }
}

class Car {
   constructor(brand, color, speed, plat) {
      this.brand = 'Alphart Lombardi';
      this.color = color;
      this.speed = speed;
      this._plat = `${this.color.toUpperCase()} - ${Math.floor(Math.random() * 1000)}`;
   }
   
   get getplat() {
      return this._plat;
   }

   set setplat(plat) {
      console.log('Anda tidak diperbolehkan merubah nomor plat!');
   }

   topspeed() {
      console.log(`${this.brand} dapat menempuh kecepatan 200km/jam dalam 1 detik.`);
   }
}

const mylaptop = new Laptop('ROG Zephyrus 14 Series 2', 'White');
mylaptop.processor = 'Intel Core i12';
console.log(mylaptop);
mylaptop.gaming();

const mycar = new Car('Black', '2000 cc', 'P 1 RR');
mycar.brand = 'Lamborghini Aventador';
console.log(mycar);
mycar.topspeed();
mycar.setplat = 'WHITE - 078';