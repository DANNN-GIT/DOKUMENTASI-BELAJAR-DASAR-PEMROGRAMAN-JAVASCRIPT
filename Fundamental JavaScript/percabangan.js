let bahasa = 'Indonesia';
let greeting = null;

// if (bahasa == 'Indonesia') {
//    greeting = 'Selamat Pagi!';
// } else if(bahasa == 'Inggris') {
//    greeting = 'Good Morning!';
// } else {
//    greeting = 'Bahasa tidak ditemukan!';
// }

// bahasa == 'Indonesia' ? greeting = 'Selamat Pagi!'
//    : bahasa == 'Inggris' ? greeting = 'Good Morning!'
//       : 'Bahasa tidak ditemukan!';

switch (bahasa) {
   case 'Indonesia':
      greeting = 'Selamat Pagi!';
      break;
   case 'Inggris':
      greeting = 'Good Morning!';
      break;
   default:
      greeting = 'Bahasa tidak ditemukan!';
}

console.log(greeting);