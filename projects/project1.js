const buttons = document.querySelectorAll('.buttons')
const body = document.querySelector('body')

buttons.forEach( (button ) => {
    console.log(button)
    button.addEventListener('click', function (e){
        console.log(e.target)
        if(e.target.id === 'grey'){
            body.style.backgroundColor= 'grey'
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor= 'red'
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor= 'yellow'
        }
        if(e.target.id === 'orange'){
            body.style.backgroundColor= 'orange'
        }
    })
    const btn = document.createElement('button')
    btn.innerHTML='RESET'

    button.appendChild(btn)
    btn.addEventListener('click',function(e){
body.style.backgroundColor ='white'
    })
})