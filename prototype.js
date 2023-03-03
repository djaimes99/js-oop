function Person(name, lastname){
    this.name = name
    this.lastname = lastname
    this.displayName = function(){
        return `${this.name} ${this.lastname}`
    }
}
 const jhon = new Person('john', 'mcmillan')
 jhon.name = 'joe'
 console.log(jhon.displayName())

 Person.prototype.greet = function(){
    return `hello I am ${this.name}`
 }

 Person.prototype.age = 100

 console.log(jhon)

 const mario = new Person('Mario', 'Rossi')
 const maria = new Person('Maria', 'Perez')
 const jose  = new Person('jose', 'Ramos')
 console.log(mario.displayName())

 console.log(mario)
 console.log(maria)
 console.log(jose)

 
 console.log(mario.greet())
 console.log(maria.greet())
 console.log(jose.greet())
 
 jhon.age =50
 maria.age = 100
 mario.age = 150
 jose.age = 200


 console.log(jhon.age)
 console.log(maria.age)
 console.log(mario.age)
 console.log(jose.age)


 