
// const buttons = window.parent.document.querySelector(".action-buttons-grid").children;

// Calculator Operations



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
function Calculate(num1, operator, num2) {
    return operator(num1, num2)
}

export {
    add,
    subtract,
    multiply,
    divide,
    Calculate
};