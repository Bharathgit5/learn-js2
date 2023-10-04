const clock = document.querySelector('.clock')
const stop = document.querySelector('.stop')


const myinterval = setInterval(mytimer , 1000);
function mytimer(){
    let date = new Date();
        clock.innerHTML=date.toLocaleTimeString();
 
}

function mystop(){
    clearInterval(myinterval);
    clock.innerHTML='REFRESH TO VIEW TIME'
}


