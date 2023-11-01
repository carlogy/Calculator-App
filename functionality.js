
import { add, multiply, subtract, divide, Calculate } from './Calculator.js'


const buttons = document.querySelector(".action-buttons-grid").children;

const actionButtons = document.getElementsByClassName("operation");

const menuButton = document.querySelector(".menu");

const menuIcon = document.querySelector(".menu-icon");

const menuItems = document.querySelector(".List-menu").children;

let inputScreen = document.querySelector(".input-screen");

let menuClicked = false;

let darkMode = true;

let calcInputs = "";


for (const button of buttons) {

    button.addEventListener("click", (event) => {

        updateInput(String(button.textContent), inputScreen.textContent);

    });
}


// function menuEnableClickHandler(event) {

//     menuButton.menuItems.removeAttribute("hidden");
//     menuClicked = true;
// }

// function menuDisableClickHandler(event) {

//     menuButton.menuItems.setAttribute("hidden", true)
//     menuClicked = false;
// }


function menuEnableClickHandler(event) {

   menuIcon.setAttribute("hidden", true);

    for (const item of menuItems) {


        item.removeAttribute("hidden");


        item.addEventListener("click", (event) => {

            switch (item.textContent) {
                case "☾":
                    displayThemeClickHandler(event);
                    // console.log("dark/light mode clicked")
                    break;
                case "Tip Calculator":
                    console.log("Tip Calc clicked");
                    break;
                case "Discount Calculator":
                    console.log("Discount Calc clicked");
                    break;
                default:
                    break;
            }
        } )
    }


    menuClicked = true;
}

function displayThemeClickHandler(event) {

    console.log("darkMode: ", darkMode);

    menuDisableClickHandler(event);
    menuIcon.removeAttribute("hidden");
}

function menuDisableClickHandler(event) {
    for (const item of menuItems) {

        item.setAttribute("hidden", true);
    }

    menuClicked = false;
}

menuButton.children[0].addEventListener("click", (event) => {

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
})



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
