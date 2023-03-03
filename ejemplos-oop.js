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







