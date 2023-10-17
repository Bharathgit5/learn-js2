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
        let error = true
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

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:'bharathgit5',password:'12345'})
        }else{
            reject('ERROR: PROMISE5 went wrong')
        }
    },1000)
})

//another approch instead of .then and .catch i.e async and await
async function consumePromiseFive(){
   try{
    const result = await promiseFive //promise is an obj should not call like function promiseFive()
    console.log(result)
   } catch(error){
    console.log(error)
   }
}

consumePromiseFive() //gives output when error = false but when erro = true then the problem comes
//async await cannot handle errors directly so use try catch block to handle errors

async function getAllusers(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json() //this responsec also await
        console.log(data)
    }catch(error){
      console.log(error)
    }
   
}
//getAllusers()
//same exaple in .then and .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))
//why does fetch respnse comes first of all other code???????

//HOW DOES FEtCH WORKS
//a fetch promise rejects when a network error is encountered , it doesnot reject on https errors like 404
//why does fetch respnse comes first of all other code???????
/* 1. js engine has two components one is memeory heap and another one is call stack
from call stack some function call to webAPI --> SETTIMEOUT and the moves to register callback and moves on
fetch contains in webAPI and it creates a special priority queue(callback) which exceute faster compared to settimeout

*/
/*

respnse = fetch('something)
fetch divides work into two parts one is data and another one is webbrowser
data(one method) reserve memory for data comes from browser resolve stores in onfullfilled[] and 
onrejection[] when it gets rejcted.
from webbrowser we will get network req  if the data is resolve(404 can be resolved only its not an error) then it goes to onfullfilled if any error(not 404 https) it goes to onrejection[]
data will fullfill the respne and we will get data
*/