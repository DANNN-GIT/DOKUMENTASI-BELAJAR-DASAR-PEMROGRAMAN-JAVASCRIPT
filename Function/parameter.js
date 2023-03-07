function profile({callname, fullname}) {
   return `Nama lengkap ${callname} adalah ${fullname}`;
}
const users = {
   callname: 'Wildan',
   fullname: 'Ahmad Wildan'
}
let data = profile(users);
console.log(data);


function perpangkatan(angka, pangkat = null) {
   let count = angka ** pangkat;
   return `${angka} ^ ${pangkat} = ${count}`;
}
let result = perpangkatan(3, 2);
console.log(result);


function countarray(...numbers) {
   let result = 0;
   for (let number of numbers) {
      result = result + number;
   }
   console.log(numbers);
   return result;
}
console.log(countarray(4, 2, 5, 6, 2, 6, 1));


function inputdata(...mahasiswa) {
   return mahasiswa;
}
console.log(inputdata('Ahmad Wildan', 'Amalia Siska Kurniawati', 'Bagas Sanjaya'));