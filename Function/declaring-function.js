function hello(name, languange) {
   languange == 'Indonesia' ? console.log(`Hallo, selamat pagi ${name}!`)
      : languange == 'Inggris' ? console.log(`Hello, good morning ${name}!`)
      : languange == 'French' ? console.log(`Bonjour, ${name}!`)
      : console.log('Bahasa tidak ditemukan!');
}
hello('Ahmad Wildan', 'Inggris');

function persegipanjang(panjang, lebar) {
   return panjang * lebar;
}
let luas = persegipanjang(12, 4);
console.log(luas);

let mahasiswa = function(nim) {
   switch (nim) {
      case 'E41201452':
         return 'Nim ini sudah terdaftar untuk mahasiswa (Ahmad Wildan).';
         break;
      case 'E41201005':
         return 'Nim ini sudah terdaftar untuk mahasiswa (Amalia Siska Kurniawati).';
         break;
      default:
         return 'Nim belum terdaftar, Anda bisa menggunakannya!'
         break;
   }
}
console.log(mahasiswa('E41201005'));