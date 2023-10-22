//understanding call

function SetUsername(username){  //this method is used to get the username by calling the function
//complex database calls
    this.username= username

}

function createUser(username,email,password){
//normal functino call doesnot work here
//SetUsername(username) //calling function here to get username
//should use call method and this to call the function
SetUsername.call(this, username)  //call passes the cuurent exceutinon context to another function  
    this.email=email;
    this.password=password;
}

 //creating user here
const user1 = new createUser('bharath', 'bharath@gmail.com', '123')
console.log(user1);
