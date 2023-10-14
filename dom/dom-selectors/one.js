let one = document.getElementById('firstheading')

document.getElementById('firstheading') //-> selects the element with the firstheading id and then we can manipulate
document.getElementById('firstheading').innerHTML // -> 'bharath' vlaues in the id

//we can also get by className 
document.getElementsByClassName('heading')
//we can get and set the attribute also
// to get attribute    
document.getElementById('firstheading').getAttribute('id') // -> gives 'firstheading'
document.getElementById('firstheading').getAttribute('class') // -> gives classname

//to set attribute
document.getElementById('firstheading').setAttribute('class','test') //sets the new attribute and classnames and ids

//we can add style to elements by using DOM getting elements by id - id with firstheading name will changes accordingly
let title = document.getElementById('firstheading')
title.style.backgroundColor='orange';
title.style.padding= '10px'
title.style.textAlign='center'
title.style.borderRadius='10px'


//quaryselector can select all selector of css
let uls = document.querySelector('ul');//selects ul i.e all the list included
let coloredli = uls.querySelector('li'); //selects first li only querySelector() only selects first selector
coloredli.style.backgroundColor='pink';
uls.style.padding = '10px'


//quaryselectorALL 
let all = document.querySelectorAll('li')
//all.style.backgroundColor='red' // it doesnot work cause use index
all[1].style.color='orange' //works indexing

//if we want to loop through the queryselectorall use forEach

all.forEach( (l) => {
    l.style.backgroundColor='pink'
})

const changeh2new = document.querySelectorAll('h2')

changeh2new.forEach( (h) =>{
    h.style.backgroundColor='yellow';
    h.style.padding='10px';
    h.style.borderRadius='10px';
    h.style.textAlign='center';
    h.style.color='black';
    h.innerHTML = 'BHARATH'
})


/*
queryselectors
document.querySelector('#firstheading') -> gives full elemnets of that id

queryselectorsAll is not an array it is a nodelist . similar like array but not array
let uls = document.querySelectorAll('ul');

*/


//getElementByClassName no loop exist should convert into array
//for classname return type is HTMLcollection looping doesnot exists
let classli = document.getElementsByClassName('list-item') 

//to loop through HTMLcollection need to convert into array //queryselector also gives html collection
const newclassli =Array.from(classli)
newclassli.forEach( (li) => {
    li.style.backgroundColor='red'
})



/*
//there are three was to get the values from an id 
//1 .document.getElementById('firstheading').innerHTML -> 'DOM learning on chai aur code' even tags will output
//2 .document.getElementById('firstheading').textContent -> 'DOM learning on chai aur code'
//3 .document.getElementById('firstheading').innerText -> 'DOM learning on chai aur code'

//1. gives html elements so no confusion
//we should know the difference b/w textContent and innerText
//innerText -> if we use display:none then it doesnot display anything
//textContent -> even if you use display:none then it will display

*/


