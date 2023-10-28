
import { add, multiply, subtract, divide, Calculate } from './Calculator.js'


const buttons = document.querySelector(".action-buttons-grid").children;

const actionButtons = document.getElementsByClassName("operation");

let inputScreen = document.querySelector(".input-screen");

let calcInputs = "";


const operations = [];

function updateInput(buttonText, currentScreenText) {


    switch (buttonText) {
        case "=":
                solveProblem(buttonText, currentScreenText);
                break;
            case "C":
                clearInput(buttonText);
                break;
            case "⌫":
                backspaceInput(buttonText, currentScreenText);
                break;
            case "()":
                paranthesis(buttonText, currentScreenText);
                break;
            case "+":
                operator(buttonText, currentScreenText);
                break;
            case "-":
                operator(buttonText, currentScreenText);
                break;
            case "x":
                operator(buttonText, currentScreenText);
                break;
            case "÷":
                operator(buttonText, currentScreenText);
                break;
            default:

                calcInputs === "" ? calcInputs = buttonText :
                    calcInputs += buttonText;
                // console.log(calcInputs);
                break;
    }


   inputScreen.textContent = calcInputs;
}


for (const button of buttons) {

    button.addEventListener("click", (event) => {

        updateInput(String(button.textContent), inputScreen.textContent);

    });
}

function operator(buttonText , currentScreenText) {

    switch (buttonText) {
        case "+":
            try {

                calcInputs += " + ";
                operations.push(add);
                // disableActionButtons();

            } catch (error) {
                console.log(error);
            }
            break;
        case "-":
            try {

                calcInputs += " - ";
                operations.push(subtract);

            } catch (error) {

                console.log(error);
            }
            break;
        case "x":
            try {

                calcInputs += " x ";
                operations.push(multiply);

            } catch (error) {

                console.log(error);
            }
            break;
        case "÷":
        try {

            calcInputs += " ÷ ";
            operations.push(divide);

        } catch (error) {

            console.log(error);

        }
        break;

        default:
            break;
    }


}



function paranthesis (buttonText, currentScreenText) {

    if (buttonText === "()") {
        try {

            let leftParenthsCount = 0;
            let rightparenthsCount = 0;
            for (const char of currentScreenText) {

                char === "(" ? leftParenthsCount +=1 : leftParenthsCount + 0;
                char  === ")" ? rightparenthsCount +=1 : rightparenthsCount + 0;
            }

            if (!currentScreenText.includes("(") && !currentScreenText.includes(")")) {
                calcInputs += "("
            } else if (currentScreenText.includes("(") && !currentScreenText.includes(")")) {

                calcInputs += ")";
            }
            else if (leftParenthsCount === rightparenthsCount) {
                calcInputs += "(";

            } else {
                calcInputs += ")";
            }

            console.log(calcInputs);
            inputScreen.textContent = calcInputs;
        } catch (error) {

            console.log(error);

        }

    }



}


function backspaceInput(buttonText, currentScreenText) {




    if (buttonText === "⌫") {
        try {


            console.log(currentScreenText);

            let newIndex = currentScreenText.length - 1;
            console.log(currentScreenText.length);

            console.log(currentScreenText, newIndex);
            console.log("⌫ button has been pressed.")

            calcInputs = calcInputs.substring(0,newIndex);
            console.log(calcInputs);
            inputScreen.textContent = calcInputs;

        } catch (error) {
            console.log(error);
        }
    }
}

function clearInput(buttonText) {

    if (buttonText === "C") {
        try {

           calcInputs = "";
           console.log(calcInputs);
           inputScreen.textContent = calcInputs;
           enableActionButtons();

        } catch (error) {
            console.log(error);

        }
    }
}

function solveProblem(buttonText, currentScreenText) {




    if (buttonText === "=") {
        try {


            let parsedInput = inputParser(currentScreenText);

                console.log(parsedInput);

                Calculate(parsedInput);



                // if (operations.length === 1) {

                // let answer =  Calculate(numbers[0], operations[0], numbers[1]);

                // calcInputs = String(answer);
                // operations.length = 0;
                // numbers.length = 0;
                // }











        } catch (error) {
            console.log(error);
        }
    }

}

function inputParser(currentScreenText) {

    const expression = currentScreenText.split(" ");
    const numbers = [];


    const parsedExpression = []


    for (const element of expression) {
        if (element !== '+' &&
                element !== '-' &&
                element !== 'x' &&
                element !== '÷' &&
                element !== '(' &&
                element !== ')')  {
            parsedExpression.push(Number(element));

        } else {
            parsedExpression.push(element);
        }

    }

    return parsedExpression;


    // for (const element of expression) {

    //     if (element !== '+' &&
    //         element !== '-' &&
    //         element !== 'x' &&
    //         element !== '÷' ) {

    //             numbers.push(Number(element));
    //         }

    // }


}

function disableActionButtons() {
    for (const button of actionButtons) {

        button.disabled = true;
    }
}

function enableActionButtons() {
    for (const button of actionButtons) {

        button.disabled = false;

    }
}
