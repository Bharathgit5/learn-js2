//password encryption using getter and setter

const user = {
    _password:"",

    get password(){
        return this._password;
    },
    set password(value){
        this._password = this.encrypt(value);
    },
    encrypt(value){
        return value.split("").reverse().join("");
    },
    decrypt(value){
        return value.split("").reverse().join("");
    }
}

console.log(user.password)
user.password = "bharath@#$12"
console.log(user.password) //password will be reversed
console.log(user.decrypt(user.password))

