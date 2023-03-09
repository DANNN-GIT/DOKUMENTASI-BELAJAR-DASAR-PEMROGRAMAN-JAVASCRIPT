// Array Map
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!` });
console.log(newArray);

// Array Filter
const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));
console.log(truthyArray);

const students = [
   {
      name: 'Harry',
      score: 60,
   },
   {
      name: 'James',
      score: 88,
   },
   {
      name: 'Ron',
      score: 90,
   },
   {
      name: 'Bethy',
      score: 75,
   }
];
const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
console.log(eligibleForScholarshipStudents);

// Array Reduce
const mahasiswa = [
   {
      name: 'Harry',
      score: 60,
   },
   {
      name: 'James',
      score: 88,
   },
   {
      name: 'Ron',
      score: 90,
   },
   {
      name: 'Bethy',
      score: 75,
   }
];
const totalScore = mahasiswa.reduce((acc, mahasiswa) => acc + mahasiswa.score, 0);
console.log(totalScore);

// Array some
const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);
console.log(even);

// Array find
const users = [
   {
      name: 'Harry',
      score: 60,
   },
   {
      name: 'James',
      score: 88,
   },
   {
      name: 'Ron',
      score: 90,
   },
   {
      name: 'Bethy',
      score: 75,
   }
];
const findJames = users.find(user => user.name === 'Bethy');
console.log(findJames);

// Array sort
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const numbers = [1, 30, 4, 1000, 101, 121];
numbers.sort();
console.log(numbers);

const values = [1, 30, 4, 1000];
const compareNumber = (a, b) => {
   return a - b;
};
const sorting = values.sort(compareNumber);
console.log(sorting);

// Array every
const scores = [70, 85, 90];
const minimumScore = 65;
const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);

// Array forEach
const imperatif = ['Harry', 'Ron', 'Jeff', 'Thomas'];
for (let i = 0; i < imperatif.length; i++) {
   console.log(`Hello, ${imperatif[i]}!`);
}

const deklaratif = ['Harry', 'Ron', 'Jeff', 'Thomas'];
deklaratif.forEach((name) => {
   console.log(`Hello, ${name}!`);
});

const pelanggan = ['Harry', 'Ron', 'Jeff', 'Thomas'];
for (let i = 0; i < pelanggan.length; i++) {
   if (pelanggan[i] === 'Jeff') continue; // Bisa!
   console.log(`Hello, ${pelanggan[i]}!`);
}

// names.forEach((name) => {
//    if (name === 'Jeff') continue; // Tidak Bisa!
//    console.log(`Hello, ${name}`);
// });