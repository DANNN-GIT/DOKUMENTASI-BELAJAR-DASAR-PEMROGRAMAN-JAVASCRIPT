class User {
   constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
   }

   get getname() {
      return `Nama : ${this.firstname} ${this.lastname}`;
   }

   set setname(name) {
      const [firstname, lastname] = name.split(' ');
      this.firstname = firstname;
      this.lastname = lastname;
   }
}

const user = new User('Ahmad', 'Wildan');
user.setname = 'Ardito Pramono';
console.log(user);
console.log(user.getname);