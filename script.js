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
    firstNum = null;
    secondNum = null;
    operator = null;
}

let firstNum = null;
let secondNum = null;
let operator = null;
let displayValue = null;
let clearNeeded = false;

const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
numbers.forEach((button) => {
    button.addEventListener('click', () =>{
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
    display.textContent = 0;
    clear();
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) =>{
    button.addEventListener('click', () =>{
        if (operator === null){
            firstNum = display.textContent;
            operator = button.id;
            clearNeeded = true;
        }
    
    });
});

const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', () =>{
    if (operator != null){
        displayValue = operate(parseInt(firstNum), parseInt(display.textContent), operator);
        clear();
        display.textContent = displayValue;
        clearNeeded = true;
    }
});









//console.log(operate(firstNum, secondNum, operator));


