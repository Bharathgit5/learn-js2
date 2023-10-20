//look at the image everything in js is an obj then what about functions
function multi(num){
    return num*9;
}


multi.power = 2
console.log(multi(5))
console.log(multi.power); //function can also be an object
console.log(multi.prototype) //by default context

//this keyword???
function createUser(username,score){
    this.username=username  //this is used to say that useername belongs to current function
    this.score=score
}

//creating own functionalitites

createUser.prototype.decrement = function(){
    this.score  //this == jis(in hindi) who ever calls you go there dont be confuse
}

//display score
createUser.prototype.display = function(){
    console.log(`score is ${this.score}`)
}

//users

const bharath = new createUser('bharath',90)  //without new keyword will get an error
const parthi = new createUser('parthi',88)  //new keyword is important in interview fist you should not use new keyword then you get an error show to them that if you dont use new we will get error

bharath.display()



/*
new keyword
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/