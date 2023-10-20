//js default behaviour is prototypial
//The JavaScript prototype property allows you to add new properties to object constructors:
//prototypal inheritance

//goal is to create a property in which we will get the truelenth of a string excluding space 
//and one more thing we can also use trim() but in this use case only one time the trim() will be declared 
//and can be used for differetn words as well

let name = 'bharath    '
//console.log(name.truelength)


//example before goal 

//can we make our own function in obj

//let example = [1,2,3]
let hero = {
    pawan:'guns',
    prabhas:'thalvars',
    getpawanPower: function(){
        console.log(`pawan power is ${this.pawan}`)
    }
}
Object.prototype.newpowers=function(){
    console.log('they are more powerful')
}

hero.newpowers() //can we add custom functions to obj used in all objes
//example.newpowers()


//inheritance
