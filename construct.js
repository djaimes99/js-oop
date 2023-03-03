/* objetos literales */
const user1 ={
    name: 'Deivie',
    lastname: 'Jaimes',
    age: 42,
    showFullName(){
        return this.name+' '+this.lastname
    }
}
console.log(user1.showFullName())

//constructor vacio
function Person(){
    this.name = ""
    this.lastname = ""
    this.age = 0
    this.showFullName = function () {
        return `${this.name} ${this.lastname}`
    }
}
const user2 = new Person()
user2.name = "Joe"
user2.lastname = "McMillan"
user2.age = 42
console.log(user2.showFullName())

const user3 = new Person()
user3.name = "Cameron"
user3.lastname = "Howe"
user3.age = 42
console.log(user3.showFullName())

const user4 = new Person()
const user5 = new Person()

console.log(user3)
console.log(user4)
console.log(user5)
//console.log(user3, user4, user5)