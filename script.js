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

let firstNum = 2;
let secondNum = 3;
let operator = '+';

console.log(operate(firstNum, secondNum, operator));


