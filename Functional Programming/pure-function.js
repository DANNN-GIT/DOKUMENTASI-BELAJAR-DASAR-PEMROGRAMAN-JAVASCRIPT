const luasLingkaran = (jarijari) => 3.14 * (jarijari * jarijari);
console.log(luasLingkaran(10));

const createPersonWithAge = (age, person) => {
   return { ...person, age };
};

const person = {
   name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({
   person,
   newPerson
});

/* 3 Konsep Pure Function
Mengembalikan nilai yang sama bila inputannya(nilai parameter) sama.
Hanya bergantung pada argumen yang diberikan.
Tidak menimbulkan efek samping. */