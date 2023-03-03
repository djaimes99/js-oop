//function Person(){
//  this.name = ''
//this.lastname = ''
//}
class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
    return {
        x: "something"
    }
  }

//   greet() {
//     return `Hello,I am ${this.name} ${this.lastname}`;
//   }
}

const user1 = new Person("Pedro", "Perez");
const user2 = new Person("Maria", "Puig");

console.log(user1);
console.log(user2);

// console.log(user1.greet());
// console.log(user2.greet());

// tipo de dato de una clase 
console.log(typeof(Person))
