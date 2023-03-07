const profile = new Map([
   ['name', 'Ahmad Wildan'],
   ['gender', 'Laki-laki'],
   ['usia', 22]
]);

console.log(profile.size);
console.log(profile.get('name'), profile.get('gender'));

profile.set('ttl', 'Bondowoso, 27 Oktober 2000');
console.log(profile.size);
console.log(profile.get('usia'), profile.get('ttl'));