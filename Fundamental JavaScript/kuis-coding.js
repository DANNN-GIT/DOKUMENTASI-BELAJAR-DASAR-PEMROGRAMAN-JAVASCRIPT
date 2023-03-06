/**
 * TODO:
 * Buatlah variabel firstName, lastName, age, isMarried dengan ketentuan:
 *  - firstName: bertipe data string, dengan nilai nama depan Anda.
 *  - lastName: bertipe data string, dengan nilai nama belakang Anda.
 *  - age: bertipe data number, dengan nilai umur Anda.
 *  - isMarried: bertipe data boolean, dengan bebas Anda tentukan.
 */

const firstName = 'Ahmad', lastName = 'Wildan';
let age = 22;
let isMarried = false;

console.log(`Hallo, saya ${firstName} ${lastName}.`);
console.log(`Saat ini saya berusia ${age} tahun.`);

isMarried ? console.log('Status hubungan sudah menikah.')
   : console.log('Status hubungan belum menikah.');

/**
 * Buatlah logika if untuk mengevaluasi nilai score dengan ketentuan:
 *  1. Jika score bernilai 90 atau lebih
 *      - Isi variabel score dengan nilai: 'Selamat! Anda mendapatkan nilai A.'
 *  2. Jika score bernilai 80 hingga 89
 *      - Isi variabel score dengan nilai: 'Anda mendapatkan nilai B.'
 *  3. Jika score bernilai 70 hingga 79
 *      - Isi variabel score dengan nilai: 'Anda mendapatkan nilai C.'
 *  4. Jika score bernilai 60 hingga 69:
 *      - Isi variabel score dengan nilai: 'Anda mendapatkan nilai D.'
 *  5. Jika score bernilai di bawah 60:
 *      - Isi variabel score dengan nilai: 'Anda mendapatkan nilai E.'
 *
 *
 *  Note: - Mohon untuk tidak menghapus kode yang sudah ada sebelumnya.
 *        - Anda tidak perlu membuat variabel score dan score secara manual.
 *          Gunakan variabel yang sudah disediakan.
 *
 */

let score = 100, result;

if (score >= 90) {
   result = 'Selamat! Anda mendapatkan nilai A.';
} else if (score >= 80 && score < 90) {
   result = 'Anda mendapatkan nilai B.';
} else if (score >= 70 && score < 80) {
   result = 'Anda mendapatkan nilai C.';
} else if (score >= 60 && score < 70) {
   result = 'Anda mendapatkan nilai D.';
} else {
   result = 'Anda mendapatkan nilai E.';
}

console.log(result);