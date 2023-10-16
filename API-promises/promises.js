//promise obj represents the eventual completion or failure of an async operation and its resulting value
//creating promises   promises takes callback(function)
const promiseOne = new Promise(function(resolve,reject){
   //Do an async task
   //DB calls, cryptography, network
   setTimeout( function(){
  //  console.log('async task is complete')
    resolve(); //to connect the resolve and .then
   },1000) 
})
//consumption of promise
promiseOne.then(function(){
  //  console.log('promise consumed')
}) //.then connected with resolve

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2')
        resolve()
    },1000)
}).then(function(){
    console.log('async 2 resolve')
})
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
resolve({username:'bharath',email:'bharath@gmail.com'})
    },1000)
})

promiseThree.then(function(user){
 console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:'bharath',password:'120'})
        }else {
            reject('ERROR: Something went wrong')
        }

    },1000)
})

promiseFour
.then( (user) =>{
   console.log(user)
   return user.username
})
.then((username) => {
console.log(username)
})
.catch(function(error){
    console.log(error)
}).finally(() =>{
    console.log('the promise is either resolved or rejected')
})
