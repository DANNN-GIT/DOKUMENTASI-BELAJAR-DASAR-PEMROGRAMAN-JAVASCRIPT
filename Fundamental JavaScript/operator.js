const w = '10';
let x = 10;
let y = 12;

console.log(w == x);
console.log(w === x);

console.log(x > 15 && y > 10);
console.log(x < 15 && y > 10);

console.log(x < 15 || y > 10);
console.log(x > 15 || y > 10);

console.log(!(x < 15));
console.log(!(x < 15 && y > 10));

// console.log(x += y);
// console.log(x -= y);
// console.log(x *= y);
// console.log(x /= y);
// console.log(x %= y);