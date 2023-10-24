class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }



    //using getter and setter for email 
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){  //gives an error if we use only getter
        
        //can manipulate the password
        return `${this._password}bharath`

    }

    set password(value){  //gives an error RangeError: Maximum call stack size exceeded
        //to avoid this error we should differ from the properties of constructor and getter and setter
        this._password = value
    }

}

const bharath = new User('bharath@gmail.com','abc')
console.log(bharath.password)  //if you want to hide the password and show encrypted password we need getter and setter
//console.log(bharath._email) --> gives normal email 
//console.log(bharath.email) --> gives getter and setter value in uppercase