// object literal in js
const user = {
    username:'hitesh',
    loginCount:8,
    signedIn: true,

    getuserdetails: function(){
        console.log('got user details from database');
       // console.log(`username ${username}`) here we will get an error not defined 
 //current context
      // console.log(this.username)
       console.log(this) //this gives full object that is the current context
    }

}
//console.log(this) // --> {}
console.log(user.username)
console.log(user.getuserdetails())

//instead of creating more objects use contructor function

//const promiseOne = new Promise()  //new is constructor function helps in making new context --- consructor function create new instance

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    return this //if we dont use return here it doesnot happen anything 
}

/*const userOne = User('bharath', 12, true)
const userTwo = User('hitesh',12, false) //if we do this it will override the userOne
console.log(userOne)
console.log(userTwo)
//to avoid this overriding use new keyword
*/
const userOne =new  User('bharath', 12, true)
const userTwo =new  User('hitesh',12, false) 
console.log(userOne)
console.log(userTwo)
//now override will not happen because of new
//when new keyword is used then empty obj is used it is called as instance
//have a look on instanceof