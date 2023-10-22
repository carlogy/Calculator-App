Calculator




function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}



function Calculator(num1, num2, operator) {
    return operator(num1, num2)
}

console.log(Calculator(2,15,multiply));

