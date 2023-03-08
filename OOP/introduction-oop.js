const car = {
   merk: 'Alphart Vellfire',
   warna: 'Putih',
   'kode mobil': 'DK 8972 AQ',
   speed: '1000cc',
   
   drive: () => {
      console.log('Driving');
   },
   reverse: () => {
      console.log('Reversing');
   },
   turn: () => {
      console.log('Turning');
   }
}
const { merk, warna, 'kode mobil':nomorplat, speed } = car;

console.log(merk, warna, nomorplat, speed);

car.drive();
car.reverse();
car.turn();