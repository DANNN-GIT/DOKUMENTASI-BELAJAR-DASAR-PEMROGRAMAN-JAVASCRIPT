const { inspect } = require('util');

let users = new WeakMap();

function datauser(user) {
   let count = users.get(user) || 0;
   users.set(user, count + 1);
}

let me = {name: 'Ahmad Wildan'};
datauser(me);

me = null;

setTimeout((event) => {
   console.log(inspect(users, { showHidden: true }));
}, 10000);