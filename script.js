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
        if (b === 0){
            result = 0;
        }
        else {
            result = divide(a,b);
        }
    }
    return result;
}

function clear(){
    firstNum = null;
    secondNum = null;
    operator = null;
}

let firstNum = null;
let secondNum = null;
let operator = null;
let displayValue = null;
let clearNeeded = false;
let equalEntered = false;
let operatorRecent = false;

const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
numbers.forEach((button) => {
    button.addEventListener('click', () =>{
        operatorRecent = false;
        if (clearNeeded === true){
            display.textContent = button.id;
            clearNeeded = false;
        }
        else if(display.textContent === '0'){
            display.textContent = button.id;
        }
        else {
            display.textContent = display.textContent + button.id;
        }        
    });
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () =>{
    operatorRecent = false;
    display.textContent = 0;
    clear();
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) =>{
    button.addEventListener('click', () =>{
        if (equalEntered === true){
            operator = null;
            secondNum = null;
            equalEntered = false;
        }
        if(operatorRecent === true){
            operator = button.id;
        }
        else if (operator === null){
            firstNum = parseInt(display.textContent);
            operator = button.id;
            clearNeeded = true;
            operatorRecent = true;
        }
        else{
            secondNum = parseInt(display.textContent);
            displayValue = operate(firstNum, secondNum, operator);
            display.textContent = displayValue;
            firstNum = displayValue;
            operator = button.id;
            secondNum = null;
            clearNeeded = true;
            operatorRecent = true;
        }
    });
});

const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', () =>{
    operatorRecent = false;
    if (operator !== null){
        if (secondNum === null){
            secondNum = parseInt(display.textContent);
        }
    
        displayValue = operate(firstNum, secondNum, operator);
        display.textContent = displayValue;
        firstNum = displayValue;
    
        clearNeeded = true;
        equalEntered = true;
    }
});



