//generate a random color using HEX values

// hex values inclues 0-9 and A-F of 6 lenght

const randomColor = function(){
    const hex ='0123456789ABCDEF'
    let color = '#'
   
    for(let i = 0;i< 6;i++){
color+= hex[Math.round(Math.random()*16)] //use 16 here because hex has values from 0-9 and A-F

    }
    return color
}
console.log(randomColor())

//seperate function for start and end 
let intervalid
const startchange = function(){
    if(!intervalid){ //optimistic code saving memory
        intervalid= setInterval(bgchange,500)
    }

    function bgchange(){
        document.body.style.backgroundColor = randomColor()
    }
   
}
document.querySelector('#start').addEventListener('click',startchange)

const stopchange = function(){
   clearInterval(intervalid)
   intervalid = null; //cleaner code and optimistic code
}
document.querySelector('#stop').addEventListener('click',stopchange)