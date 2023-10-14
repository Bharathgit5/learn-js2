/*setTimeout(function(){
    console.log('bharath')
}, 1000) //waits 1sec and print only once 

setInterval(function(){
   // console.log('yadav')
},2000) //prints every 2seconds
*/
const sayBharath = function(){
    console.log('bharath')
}
const changetxt = function(){
//can also change html content using settimeout (like popup ads)
document.querySelector('h1').innerHTML='Name changed'
}

const change = setTimeout(changetxt,2000)

//to stop settimeout , use cleartimeout need reference
document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(change)

})
