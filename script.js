const weight=document.querySelector(".weight");
const units=document.querySelector(".units");
const feet=document.querySelector(".feet");
const inches=document.querySelector(".inches");
const result=document.querySelector(".result");
const BMIstatus=document.querySelector(".BMIstatus");
console.log(weight);
let convertedweight=weight.value;





function bmi(){
    let status;
const total=feet.value*0.3048;
const totalheight=inches.value*0.0254;
const BMI=convertedweight/(total+totalheight)**2;
result.textContent ="Your body Weight is" + BMI.toFixed(2);


if(units.value==="LB"){
    convertedweight=weight.value*0.453592;
}
if(units.value==="KG"){
    convertedweight=weight.value;
}
if( BMI.toFixed(2)<=18.4){
    status=" This is considered Underweight";
}

else if( BMI.toFixed(2)<=18.5 && BMI.toFixed(2)<=24.9){
    status="This is considered Normal you are fit";
}
else if( BMI.toFixed(2)<=25.00 && BMI.toFixed(2)<=39.9){
    status="This is considered OwerWeight";
}
else if( BMI.toFixed(2)>=40.00 ){
    status="This is considered Obese";
}
BMIstatus.textContent = status;

}