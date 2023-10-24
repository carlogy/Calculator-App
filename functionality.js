
import { add, multiply, subtract, divide, Calculate } from './Calculator.js'


const buttons = document.querySelector(".action-buttons-grid").children;

let inputScreen = document.querySelector(".input-screen");

let calcInputs = "";

function updateInput(buttonText) {

    if (calcInputs === "") {
        calcInputs = buttonText
    } else {
        calcInputs += buttonText;
    }

   inputScreen.textContent = calcInputs;
}


for (const button of buttons) {

    button.addEventListener("click", (event) => {
        console.log(button.textContent + " has been clicked!");
        console.log(event);

        updateInput(String(button.textContent));

        switch (button.textContent) {
            case "=":
                solveProblem();
                break;
            case "C":
                clearInput(button.textContent);
            case "⌫":
                backspaceInput(button.textContent, inputScreen.textContent);

            default:
                break;
        }


        // if( button.textContent === "=") {
        //     solveProblem();
        // }

        // if (button.textContent === "C") {
        //     clearInput(button.textContent);
        // }

        // if ( button.textContent === "⌫") {
        //     backspaceInput(button.textContent, inputScreen.textContent);
        // }

    })
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
           inputScreen.textContent = calcInputs;

        } catch (error) {
            console.log(error);

        }
    }
}

function solveProblem() {

    try {

        console.log("Solving Problem invoked");

    } catch (error) {
        console.log(error);
    }

}

console.log(Calculate(2, multiply, 15));