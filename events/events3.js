/*setInterval(function(){
   // console.log('its me')
}, 1000)

const sayDate = function(str){
    //console.log(str,Date.now())
}
setInterval(sayDate ,1000, 'hii') //we can also set third variable
*/
//use start and stop button to get the date and stop when clicked on stop
let myinterval
 document.querySelector('#start').addEventListener('click',function(){

    const sayDate= function(str){
     console.log(str,Date.now())
    }
     myinterval =    setInterval(sayDate,1000, 'hii')
})
document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(myinterval)
})