/* Static class methods are defined on the class itself.

You cannot call a static method on an object, only on an object class. */


class User{
    
constructor(username){
    this.username = username
}

logMe(){
    console.log(`Username: ${this.username}`)
}
  //creating DB id
//static - cannot be accessed in another class even child
 static createId(){
    return '123'
  }
}

const bharath = new User("bharath")
//console.log(bharath.createId())

class newuser extends User{
    constructor(username){
        super(username)
 
    }
}

const staticprop = new newuser("ramesh", "ramesh@gmail.com")
//console.log(staticprop.createId())