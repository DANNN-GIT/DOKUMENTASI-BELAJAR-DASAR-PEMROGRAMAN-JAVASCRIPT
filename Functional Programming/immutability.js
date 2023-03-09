const user = {
   firstname: 'Harry',
   lastName: 'Protter',
}

const createUserWithNewLastName = (newLastName) => {
   return { ...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Potter');

console.log(newUser);