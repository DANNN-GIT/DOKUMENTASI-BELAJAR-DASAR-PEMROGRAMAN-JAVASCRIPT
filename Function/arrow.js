const biodata = (nim, name) => {
   console.log(`NIM : ${nim}, Nama : ${name}`);
}
biodata('E41201452', 'Ahmad Wildan');

const lingkaran = (jarijari, phi = 3.14) => phi * jarijari * jarijari;
let result = lingkaran(8);
console.log(result);