const add = () => {
   let counter = 27;
   return () => {
      return ++counter;
   };
}

const addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());