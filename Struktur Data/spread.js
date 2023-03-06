const carbrand = ['Honda', 'Nissan', 'Ferrari', 'Porsche'];
const mobrand = ['Yamaha', 'Suzuki', 'Kawasaki'];
const mergebrand = [...carbrand, ...mobrand];

console.log(mergebrand);
console.log(...mergebrand);

const laptop = {mereklaptop: 'Asus VivoBook', RAM: '12 GB'};
const hanphone = {merekhp: 'Redmi 10 A', harga: '10000'};
const motor = {merekmotor: 'Yamaha', tahun: '2019'};
const mergeobj = {...laptop, ...hanphone, ...motor};

console.log(mergeobj);