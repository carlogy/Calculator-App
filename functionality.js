
import { add, multiply, subtract, divide, Calculate } from './Calculator.js'

const menuIcon = document.querySelector(".menu-icon");

const menuItems = document.querySelector(".List-menu").children;

const calcComponents = [];

let calculatorType =  document.querySelector(".Calc-type");

let inputScreen = document.querySelector(".input-screen");

let menuClicked = false;

let darkMode = false;

const CalculatorOption = document.createElement("li");
        CalculatorOption.textContent = "Calculator";
        CalculatorOption.classList.add("List-item");

let calcInputs = "";

window.addEventListener("click", (event) => {

if(event.target.parentElement.classList.contains("action-buttons-grid") && !event.target.parentElement.classList.contains("action-buttons-grid-form")) {

    updateInput(String(event.target.textContent), inputScreen.textContent);
    menuDisableClickHandler(event);

}  else if (event.target.parentElement.classList.contains("List-menu")) {

    switch (event.target.textContent) {
        case "☾":
            menuDisableClickHandler(event);
            displayThemeClickHandler(event);
            break;
        case "☀︎":
            menuDisableClickHandler(event);
            displayThemeClickHandler(event);
            break;
        case "Tip Calculator":
            tipCalculatorClickHandler(event);
            menuDisableClickHandler(event);
            break;
        case "Discount Calculator":
            discountCalculatorClickHandler(event);
            menuDisableClickHandler(event);
            break;
        case "Calculator":
            calculatorClickHandler(event);
            menuDisableClickHandler(event);
        default:
            break;
    }}
    else if(event.target.classList.contains("tip-calc-button")) {

        console.log("Calculate Tip clicked!");
    }

 if (event.target.parentElement.classList.contains("menu")) {
    switch (menuClicked) {
        case false:
            menuEnableClickHandler(event);
            break;
        case true:
            menuDisableClickHandler(event);
            break;
        default:
            break;
        }
    }

});


function calcItemInputs(element) {

    if (calcComponents.length === 0) {

            for (const item of element) {
            calcComponents.push(item);
    }
}
    console.log(calcComponents);
}

// for (const button of buttons) {

//     button.addEventListener("click", (event) => {

//         updateInput(String(button.textContent), inputScreen.textContent);
//         menuDisableClickHandler(event);
//     });
// }

function menuEnableClickHandler(event) {

   menuIcon.setAttribute("hidden", true);

   console.log(event.target.textContent);

        for (const item of menuItems) {

            item.removeAttribute("hidden");

            // item.addEventListener("click", (event) => {

            //     switch (event.target.textContent) {
            //         case "☾":

            //             menuDisableClickHandler(event);
            //             displayThemeClickHandler(event);
            //             break;
            //         case "Tip Calculator":
            //             tipCalculatorClickHandler(event);
            //             menuDisableClickHandler(event);

            //             break;
            //         case "Discount Calculator":
            //             discountCalculatorClickHandler(event);
            //             menuDisableClickHandler(event);
            //             break;
            //         default:
            //             break;
            //     }});

    }

    menuClicked = true;

    }

function displayThemeClickHandler(event) {

    menuDisableClickHandler(event);

    menuIcon.removeAttribute("hidden");

    if (!darkMode) {

        document.body.classList.add("Dark-Theme");
        document.body.querySelector(".calculator").classList.add("calculator-dark");

        for (const input of document.querySelector(".action-buttons-grid").children) {
            input.classList.add("dark-calc-input");

        }

        switch (calculatorType.textContent) {
            case "Tip Calculator":
                for (const input of document.querySelector(".tip-form-grid").children) {
                    input.classList.add("dark-calc-input");
                }
                break;

            default:
                break;
        }

        darkMode = true;

        event.target.textContent = "☀︎";

    } else if(darkMode) {

        document.body.classList.remove("Dark-Theme");
        document.body.querySelector(".calculator").classList.remove("calculator-dark");

        for (const input of document.querySelector(".action-buttons-grid").children) {
            input.classList.remove("dark-calc-input");
        }

        darkMode = false;
        event.target.textContent = "☾";

    }
}

function tipCalculatorClickHandler(event) {

    console.log("Tip Calc button clicked");

    menuDisableClickHandler(event);

    menuIcon.removeAttribute("hidden");

    if (menuItems.length === 3) {

        document.querySelector(".List-menu").appendChild(CalculatorOption);
    }

    calcItemInputs(document.querySelector(".action-buttons-grid").children);

    document.querySelector(".action-buttons-grid").classList.add("action-buttons-grid-form");


    const tipForm =  document.createElement("div");
        tipForm.classList.add("tip-form-grid");

    const totalLabel = document.createElement("label");
        totalLabel.textContent = "Total: "
        totalLabel.setAttribute("for", "total");
        totalLabel.classList.add("tip-labels");

    const totalInput = document.createElement("input");
        totalInput.setAttribute("id", "total");
        totalInput.setAttribute("type", "number");
        totalInput.classList.add("tip-inputs");

    const splitByLabel = document.createElement("label");
        splitByLabel.setAttribute("for", "splitByInput");
        splitByLabel.textContent = "Split total by: "
        splitByLabel.classList.add("tip-labels");

    const splitNumber = document.createElement("input");
        splitNumber.setAttribute("id", "splitByInput");
        splitNumber.setAttribute("type", "number");
        splitNumber.classList.add("tip-inputs")

    const tipLabel = document.createElement("label");
        tipLabel.textContent = "Desired Tip percentage: "
        tipLabel.setAttribute("for", "tipInput");
        tipLabel.classList.add("tip-labels");

    const tipInput = document.createElement("input");
        tipInput.setAttribute("id", "tipInput");
        tipInput.setAttribute("type", "number");
        tipInput.classList.add("tip-inputs");

    const tipSubmitButton = document.createElement("button");
        tipSubmitButton.classList.add("tip-calc-button");
        tipSubmitButton.textContent = "Calculate Tip";





    console.log(calcItemInputs);



    document.querySelector(".action-buttons-grid").replaceChildren(tipForm);

    tipForm.appendChild(totalLabel);
    tipForm.appendChild(totalInput);
    tipForm.appendChild(splitByLabel);
    tipForm.appendChild(splitNumber);
    tipForm.appendChild(tipLabel);
    tipForm.appendChild(tipInput);
    tipForm.appendChild(tipSubmitButton);

    inputScreen.textContent = "";

    calculatorType.textContent = "Tip Calculator";

}

function discountCalculatorClickHandler(event) {

    console.log("Discount calc button clicked.");

    menuDisableClickHandler(event);

    menuIcon.removeAttribute("hidden");

    if (menuItems.length === 3) {

        document.querySelector(".List-menu").appendChild(CalculatorOption);
    }


    calculatorType.textContent = "Discount Calculator";

}

function calculatorClickHandler(event) {

    menuDisableClickHandler(event);
    menuIcon.removeAttribute("hidden");

    if (menuItems.length !== 3) {
        event.target.parentElement.removeChild(CalculatorOption);
    }

    document.querySelector(".action-buttons-grid").removeChild(document.querySelector(".tip-form-grid"));

    for (const item of calcComponents) {
        document.querySelector(".action-buttons-grid").appendChild(item);
    }

    document.querySelector(".action-buttons-grid").classList.remove("action-buttons-grid-form");

    inputScreen.textContent = calcInputs;

    calculatorType.textContent = "Calculator";
}

function menuDisableClickHandler(event) {

    menuClicked = false;
    menuIcon.removeAttribute("hidden");


    for (const item of menuItems) {

        item.setAttribute("hidden", true);
    }
}

// menuButton.children[0].addEventListener("click", (event) => {

//     switch (menuClicked) {
//         case false:
//             menuEnableClickHandler(event);
//             break;
//         case true:
//             menuDisableClickHandler(event);
//             break;
//         default:
//             break;
//     }
// })

// let calcValues = "";

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

                // calcValues === "" ? calcValues = buttonValue :
                // calcValues += buttonValue;

                // console.log(calcInputs);
                break;
    }

   inputScreen.textContent = calcInputs;
}


function operator(buttonText , currentScreenText) {

    switch (buttonText) {
        case "+":
            try {

                calcInputs += " + ";
                // calcValues += buttonValue;
                operations.push(add);

            } catch (error) {
                console.log(error);
            }
            break;
        case "-":
            try {

                calcInputs += " - ";
                // calcValues += buttonValue;
                operations.push(subtract);

            } catch (error) {

                console.log(error);
            }
            break;
        case "x":
            try {

                calcInputs += " x ";
                // calcValues += buttonValue
                operations.push(multiply);

            } catch (error) {

                console.log(error);
            }
            break;
        case "÷":
        try {

            calcInputs += " ÷ ";
            // calcValues += buttonValue;
            operations.push(divide);

        } catch (error) {

            console.log(error);

        }
        break;

        default:
            break;
    }
}

function paranthesis (buttonText, currentScreenText, buttonValue) {

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

                calcInputs += ") ";
                // calcValues += buttonValue;
            }
            else if (leftParenthsCount === rightparenthsCount) {
                calcInputs += "(";
                // calcValues += buttonValue;

            } else {
                calcInputs += ")";
                buttonValue += buttonValue;
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

            calcInputs = calcInputs.substring(0, newIndex);
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

        } catch (error) {
            console.log(error);

        }
    }
}

function solveProblem(buttonText, currentScreenText) {

    if (buttonText === "=") {
        try {

            console.log(currentScreenText);

            calcInputs = String(inputParser(currentScreenText));

           inputScreen.textContent = calcInputs;

        } catch (error) {
            console.log(error);
        }
    }
}

function inputParser(currentScreenText) {

    let solution;
    const numbers = [];

    // Please excuse my dear aunt sally

        if(operations.length === 1 && !currentScreenText.includes("(")) {

            const expression = currentScreenText.split(" ");

            for (const element of expression) {
                if (element !== '+' &&
                        element !== '-' &&
                        element !== 'x' &&
                        element !== '÷' &&
                        element !== '(' &&
                        element !== ')')  {

                    numbers.push(parseInt(element));

                }
            }

            solution =  Calculate(numbers[0], operations[0], numbers[1]);
            }
        else if (
                    currentScreenText.includes("(") &&
                    currentScreenText.includes(")") &&
                    operations.length === 1
                ) {

            let indexOpenParenths = currentScreenText.indexOf("(");
            let indexCloseParenths = currentScreenText.indexOf(")") + 1;

            const firstCalc = currentScreenText.substring(indexOpenParenths, indexCloseParenths).trim();

            for (const element of firstCalc) {
                if (element !== '+' &&
                        element !== '-' &&
                        element !== 'x' &&
                        element !== '÷' &&
                        element !== '(' &&
                        element !== ')' &&
                        element !== ' ' )  {

                    numbers.push(parseInt(element));
                }
            }

        solution = Calculate(numbers[0], operations[0], numbers[1]);

    }

    operations.length = 0;
    numbers.length = 0;

    return solution;
}

// function disableActionButtons() {
//     for (const button of actionButtons) {

//         button.disabled = true;
//     }
// }

// function enableActionButtons() {
//     for (const button of actionButtons) {

//         button.disabled = false;

//     }
// }
