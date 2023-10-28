
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
// function  Calculate(num1, operator, num2) {


//     try {

//         return operator(num1, num2)

//     } catch (error) {

//        console.log(error);
//     }

// }


function Calculate(expression) {

    for (const element  of expression) {

        // Please excuse my dear aunt sally






        console.log(element);



    }
}

export {
    add,
    subtract,
    multiply,
    divide,
    Calculate
};