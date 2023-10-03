//CREATING ELEMENTS USING DOM 
const div = document.createElement('div')
console.log(div) //creates div
div.className = 'parent'
div.id = 'myId'
// div.id = Math.round(Math.random() * 10 +1)
div.setAttribute('title', 'new title') //directly sets the attributes
div.style.backgroundColor = 'orange'
div.style.padding='10px' //even though it will not display on the page
//div.innerText = 'My js learing' //overrides the elements
//another method of .innerText
const txt = document.createTextNode('My js learnings') //this doesnot override create here itself
div.appendChild(txt)
//appendChild adds to the page
document.body.appendChild(div) //to display on page
console.log(txt)
