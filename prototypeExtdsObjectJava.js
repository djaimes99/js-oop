const s = new String("Hello world")

String.prototype.concatTest = function(){
    return this + " test";
}

console.log("My name is Jesus".concatTest())

console.log(s.concatTest())