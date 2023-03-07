const mee = {
   name: 'Ahmad Wildan',
   tmplahir: 'Bondowoso',
   tgllahir: '27 Oktober 2000',
   gender: 'Laki-laki',
   umur: 22
}
let name = 'Amalia Siska Kurniawati', tmplahir = 'Jakarta';
({ name, tmplahir, tgllahir, gender, umur, hobi = null } = mee);
hobi = 'coding'; 
console.log(name, tmplahir, tgllahir, gender, umur, hobi);

const daddy = {
   nm: 'Farid Efendi',
   tmp: 'Pasuruan',
   tgl: '26 Juni 1970',
   jk: 'Laki-laki',
   um: 53
}
const { nm: fullname, tmp: tempatlahir, tgl: tanggallahir, jk: jeniskel, um: usia} = daddy;
console.log(fullname, tempatlahir, tanggallahir, jeniskel, usia);