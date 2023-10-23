// ES6 
//syntactical sugar


//class

class User  {
   constructor(username, email, password){
    this.username = username
    this.email = email
    this.password = password
   }  //constructor is called when obj is initialised with class using new keyword then constructor is called itself
//creating function in class known as method

   encryptPassword(){  //hidding password
    return `${this.password}abc`
   }
formatUsername(){
    return `${this.username.toUpperCase()}`
}



}

const user1 = new User("bharath", "bharath@gmail.com","123")
console.log(user1.encryptPassword())
console.log(user1.formatUsername())
/*
//BTS behind the scences

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.formatUsername = function(){
    return `${this.username.toUpperCase()}`
}

const chai = new User("chai", "chai@gmail", "123")

console.log(chai.encryptPassword())
console.log(chai.formatUsername())

*/