
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


function Calculate(num1, operation, num2) {

    return operation(num1, num2);
}

export {
    add,
    subtract,
    multiply,
    divide,
    Calculate,
    tipFormCalc

};

function tipFormCalc(total, splitByNumber, tipPercetage) {

    let convertedPercentage = add(1, divide(tipPercetage, 100));

    let subTotal =  multiply(total, convertedPercentage);



    return splitByNumber !== 0 ? divide(subTotal, splitByNumber) : subTotal;


}