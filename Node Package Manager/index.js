import _ from 'lodash';

const myArray = [2, 4, 6, 8, 10];
let sumManual = 0;

for (let start = 0; start < myArray.length; start++) {
   sumManual += myArray[start];
}

let sumReduce = myArray.reduce((prev, curr) => {
   return prev + curr;
});

// Lodash
const sumLodash = _.sum(myArray);

console.log(sumManual);
console.log(sumReduce);
console.log(sumLodash);