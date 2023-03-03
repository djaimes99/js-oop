const string = new Object('hello world')
string.test =function (){
    return this + " test"
}
console.log(string)
console.log(string.test())


