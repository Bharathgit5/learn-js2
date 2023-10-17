const form = document.querySelector('form')

form.addEventListener('submit',function (e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight =parseInt(document.querySelector('#weight').value);
const result = document.querySelector('#results')
if(height === "" || height <0 || isNaN(height)){
    result.innerHTML=`please enter a valid height ${height}`
} else if (weight === "" || weight < 0 || isNaN(weight)){
    result.innerHTML = `please enter a valid weight ${weight}`
}else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let bmiguide= null;
    if(bmi <= 18.6){
        bmiguide='UNDERWEIGHT'
    }else if(bmi > 18.6 || bmi <= 24.6){
        bmiguide = 'NORMAL'
    }else {
        bmiguide = 'OVERWEIGHT'
    }
    result.innerHTML = `Your BMI IS ${bmi} SO YOU ARE ${bmiguide}`
}
})