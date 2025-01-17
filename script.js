let num1;
let num2;
let opt;
let all_digits= document.querySelectorAll('.dig');
console.log(all_digits);     

let clear = document.querySelector('.clear');
clear.addEventListener('click',()=>{
    display.innerHTML='';
});

let display=document.querySelector('.display');

all_digits.forEach(digit=>{
    digit.addEventListener('click',(e)=>{
        if (display.textContent === '' && e.target.textContent === '0') {
            return; // Do nothing if it's an initial 0
        }
        display.textContent += e.target.textContent;
    })
});

all_operator=document.querySelectorAll('.op');
// console.log(all_operator);
all_operator.forEach(operator=>operator.addEventListener('click',(e)=>{
    num1=display.textContent;
    display.textContent='';
    opt=operator.textContent;
}));

let answer = document.querySelector('.equal');
answer.addEventListener('click',()=>{
    num2=display.textContent;
    display.textContent='';
    display.textContent=operate(parseInt(num1),parseInt(num2),opt);
});

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b==0){
        alert("can't divide idiot");
    }
    return a/b;
}
function operate(num1,num2,operator){
    switch(operator){
        case('+'):
        return add(num1,num2);
        break;
        case('-'):
        return subtract(num1,num2);
        break;
        case('*'):
        return multiply(num1,num2);
        break;
        case('/'):
        return divide(num1,num2);
        break;
        default:
            alert('operator not exit');
    }
}
