//js is a sequential run language but there are some exceptions like asynchronus and events

//method one adding events in htmlcode - not good practice
// <li><img width="200px" id="river" src="https://images.pexels.com/photos/3532551/pexels-photo-3532551.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" onclick="alert('clicked on river')"></li>


/*// method two by getting id - this is also not that good pracice gives less features
document.getElementById('owl').onclick=function(){
    alert(`clicked on owl`);
}*/


//method three - best approach
document.getElementById('owl').addEventListener('click',function(e){
//alert('owl clicked again')
console.log(e)
},false) //default is false but we can also use true


/*different events : type,timestam, defaultPrevent
target, toElement, srcElement, currentTarget,
clientX, clientY, screenX, screenY
altkey, ctrlkey, shiftkey, keyCode

*/

//EventPropagation - eventbubbling & eventcapturing
/*document.getElementById('owl').addEventListener('click',function(e){
    //alert('owl clicked again')
    console.log(e)
    },false) - false means eventbubbling
*/

document.getElementById('images').addEventListener('click',function(e){
 console.log('clicked inside ul')
},false) //activated when clicked on any img

document.getElementById('owl').addEventListener('click',function(e){
    console.log('clicked on owl')
    e.stopPropagation(); //this will stop the propagation doesnot acaivate above one
   },false) //activated when clicked on owl

   //which one will activatd first?? - event propagation
    //it will activated according to bubbling inside to outside
//so first owl will be activaated and then images will be activated

/*// eventcapturing - true outside to inside activated
document.getElementById('images').addEventListener('click',function(e){
    console.log('clicked inside ul')
   },true) //activated when clicked on any img
   
   document.getElementById('owl').addEventListener('click',function(e){
       console.log('clicked on owl')
      },true) //activated when clicked on owl
  */
 
document.getElementById('google').addEventListener('click',function(e){
  e.preventDefault()
 
  //to stop on event bubbling
  e.stopPropagation()
  console.log('clicked on google')
},false)

//image should disappear when clicked on img

document.getElementById('images').addEventListener('click',function(e){
    console.log(e.target.parentNode)
    console.log(e.target.tagName) // gives IMG
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id)
        let removeimg = e.target.parentNode
        removeimg.remove()
    }
    //if we click on ul outside of li everything disappers it is a problem

   
})

