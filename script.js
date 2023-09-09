function convertTemp(){
let ip = Number(document.getElementById('inpt').value);
let option = document.getElementById('opt').value;

let opv1 = document.getElementsByClassName('op1')[0];
let opu1 = document.getElementsByClassName('op1')[1];

let opv2 = document.getElementsByClassName('op2')[0];
let opu2 = document.getElementsByClassName('op2')[1];

if(option=='c'){
    opu1.innerHTML = '°F';
    opu2.innerHTML = 'K';
    opv1.innerHTML = String(((ip*9/5)+32).toFixed(2));
    opv2.innerHTML = String(((ip+273.15)).toFixed(2));
}
if(option=='f'){
    opu1.innerHTML = '°C';
    opu2.innerHTML = 'K';
    opv1.innerHTML = String(((ip-32)*5/9).toFixed(2));
    opv2.innerHTML = String((((ip-32)*5/9)+273.15).toFixed(2));
}
if(option=='k'){
    opu1.innerHTML = '°C';
    opu2.innerHTML = '°F';
    opv1.innerHTML = String((ip-273.15).toFixed(2));
    opv2.innerHTML = String((((ip-273.15)*9/5)+32).toFixed(2));
}
} 