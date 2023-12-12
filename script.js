function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function operate(a, b, operator){
    result = 0;
    if (operator === '+'){
        result = add(a,b);
    } else if (operator === '-'){
        result = subtract(a,b);
    } else if (operator === '*'){
        result = multiply(a,b);
    } else if (operator === '/'){
        result = divide(a,b);
    }
    return result;
}

function clear(){

}

let firstNum = 0;
let secondNum = null;
let operator = null;
let displayValue = 0;


const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
numbers.forEach((button) => {
    button.addEventListener('click', () =>{
        if(display.textContent === '0'){
            display.textContent = button.id;
        }
        else {
            display.textContent = display.textContent + button.id;
        }
    });
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () =>{
    display.textContent = 0;
});









//console.log(operate(firstNum, secondNum, operator));


