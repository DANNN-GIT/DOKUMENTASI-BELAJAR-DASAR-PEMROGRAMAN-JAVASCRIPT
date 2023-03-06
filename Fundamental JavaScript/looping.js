let startfor = 1;
for (startfor; startfor <= 5; startfor++) {
   console.log(`For loop ${startfor}`);
}

let startwhile = 1;
while (startwhile <= 5) {
   console.log(`While loop ${startwhile}`);
   startwhile++;
}

let startdo = 1;
do {
   console.log(`Do loop ${startdo}`);
   startdo++;
} while (startdo <= 5);

let mahasiswa = ['Ahmad Wildan', 'Bahrul Arifin', 'Rizky Jundila', 'Kanjeng Darso'];
for (const data of mahasiswa) {
   console.log(data);
}