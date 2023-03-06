let msib = ['Kampus Merdeka', 'Dicoding Academy', 'Ahmad Wildan', true, 2023, 4];

msib.push('Full Stack Web Developer');
msib.pop();

msib.shift();
msib.unshift('Studi Independen');

msib.splice(3, 3);

msib[0] = 'Kampus Merdeka - Studi Independen';

console.log(msib);
console.log(msib[0], msib[1], msib[2], msib[3], msib[4], msib[5], msib[6]);
console.log('Jumlah nilai array pada data msib adalah ' + msib.length);