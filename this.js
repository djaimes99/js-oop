/* objetos literales */
const user ={
    name: 'Deivie',
    lastname: 'Jaimes',
    age: 42,
    showFullName(){
        return this.name+' '+this.lastname
    }
}
console.log(user.showFullName())

const account ={
    number: "1231235111321322",
    amount: 100,
    deposit(){
        console.log(this.amount)
    }
}

console.log(account.deposit())// 
