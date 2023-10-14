//ADDINGS ITEMS IN THE LIST using function

function addlang(newlang){
    const langli =document.createElement('li')
    langli.innerHTML = `${newlang}`
    document.querySelector('.language').appendChild(langli)
}

addlang('py')
addlang('java')
//here we are traversing



//optimised way
//no traversing here
function optilang(newlang){
   const langli = document.createElement('li')
   const addlangli = document.createTextNode(newlang)
   langli.appendChild(addlangli)
document.querySelector('.language').appendChild(langli)
}
optilang('ruby')

//EDIT

const seclang = document.querySelector('li:nth-child(2)')
//console.log(seclang)
//seclang.innerHTML='golang'

//another method of edit - creating new li element
const editseclang = document.querySelector('li')
editseclang.innerHTML='golang' 
seclang.replaceWith(editseclang)

//remove

const removelastlang = document.querySelector('li:last-child')
removelastlang.remove()