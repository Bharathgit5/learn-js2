//PARENT AND CHILD RELATIONS

//selecting parent class 
const parent = document.querySelector('.parent')
//console.log(parent) //-> gives all the children inside the parent
//console.log(parent.children) // -> gives the children inside the parent class HTMLcollection
//console.log(parent.children[2].innerHTML) // -> WE can also index and the html

//can do normal loop and cannot do forEach
//console.log(parent.children.length)
/*for(let i=0; i<parent.children.length; i++){
    console.log(parent.children[i].innerHTML)
}*/

//we can also style the html
parent.children[1].style.color='yellow'
/*//selecting child from parent
console.log(parent.firstElementChild.innerHTML)
console.log(parent.lastElementChild.innerHTML)
*/

/*
//selecting parent from child
const dayOne = document.querySelector('.day')
console.log(dayOne)
console.log(dayOne.parentElement) // -> gives parent class element
console.log(dayOne.nextElementSibling) // -> gives next element
*/


//NODELIST
console.log('NODES: ', parent.childNodes) //look at the html structure and console.
//will get o\p as NodeList(9) but we have only 5 lines of code
//the extra nodelist can from line breaks
/*
NODES:  
NodeList(9) [text, div.day, text, div.day, text, div.day, text, div.day, text]
0: text //means line break
1: div.day
2: text
3: div.day
4: text
5: div.day
6: text
7: div.day
8: text
*/
//two.js is all about traversing from parent - child , child- parent, - siblings