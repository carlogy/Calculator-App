
import { add, multiply, subtract, divide, Calculate } from './Calculator.js'


const buttons = document.querySelector(".action-buttons-grid").children;

let inputScreen = document.querySelector(".input-screen");

let calcInputs = "";

function updateInput(buttonText, currentScreenText) {


    switch (buttonText) {
        case "=":
                solveProblem(buttonText, currentScreenText);
                break;
            case "C":
                clearInput(buttonText);
                break;
            case "⌫":
                backspaceInput(buttonText, inputScreen.textContent);
                break;
            case "()":
                paranthesis(buttonText, inputScreen.textContent);
                break;
            case "+":
                operator(buttonText, inputScreen.textContent);
                break;
            case "-":
                operator(buttonText, inputScreen.textContent);
                break;
            case "x":
                operator(buttonText, inputScreen.textContent);
                break;
            case "÷":
                operator(buttonText, inputScreen.textContent);
                break;
            default:

                calcInputs === "" ? calcInputs = buttonText :
                    calcInputs += buttonText;
                console.log(calcInputs);
                break;
    }


   inputScreen.textContent = calcInputs;
}


for (const button of buttons) {

    button.addEventListener("click", (event) => {
        console.log(button.textContent + " has been clicked!");
        console.log(event);

        updateInput(String(button.textContent), inputScreen.textContent);

    });
}

function operator(buttonText , currentScreenText) {

    switch (buttonText) {
        case "+":
            try {

                calcInputs += " + ";

            } catch (error) {
                console.log(error);
            }
            break;
        case "-":
            try {

                calcInputs += " - ";

            } catch (error) {

                console.log(error);
            }
            break;
        case "x":
            try {

                calcInputs += " x ";

            } catch (error) {

                console.log(error);
            }
            break;
        case "÷":
        try {

            calcInputs += " ÷ ";

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


    let newIndex = currentScreenText.length - 2;

    if (buttonText === "⌫") {
        try {


            console.log(currentScreenText, newIndex);
            console.log("⌫ button has been pressed.")

            calcInputs = calcInputs.substring(0,newIndex);
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

        } catch (error) {
            console.log(error);

        }
    }
}

function solveProblem(buttonText, currentScreenText) {


    if (buttonText === "=") {
        try {

            console.log("Solving Problem invoked");
            console.log("The current text is: ", currentScreenText, typeof(currentScreenText));

        } catch (error) {
            console.log(error);
        }
    }




}

console.log(Calculate(2, multiply, 15));