class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`)
    }
}

//inheritance 

class Admin extends User{
    constructor(username, email, password){
       super(username) //super keyword gets the usernmae

        this.email = email
        this.password = password
    }
     addCourse(){
        console.log(`A new course was added by your teacher ${this.username}`)

     }
}

const user1 = new Admin("bharath", "bharath@gmail", "989")

user1.addCourse()
const user2 = new User("harivardhan")
user2.logMe()

console.log(user1 === user2)  //false
console.log(user1 instanceof Admin)  //instanceof means ===