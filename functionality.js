
import { add, multiply, subtract, divide, Calculate, tipFormCalc, discountFormCalc } from './Calculator.js'

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


 if (event.target.localName === "body" ||  event.target.localName === "html" || event.target.classList.contains("input-screen") || event.target.classList.contains("Calc-type") || event.target.parentElement.classList.contains("nav-bar") || event.target.classList.contains('calculator')) {

    menuDisableClickHandler(event);

} else if(event.target.parentElement.classList.contains("action-buttons-grid")
&& !event.target.parentElement.classList.contains("action-buttons-grid-form")) {

updateInput(String(event.target.textContent), inputScreen.textContent);
menuDisableClickHandler(event);

}
else if (event.target.parentElement.classList.contains("List-menu")) {

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
    }};


    if (event.target.classList.contains("calc-form-button")) {


            switch (event.target.textContent) {
                case "Calculate Tip":
                    submitTipForm(event);
                    break;
                case "Calculate Discount":
                    submitDiscountForm(event);
                    break;
            }
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

}
// , true
);


function submitTipForm(event) {

    let formChildren = event.target.parentElement.children;

    let tipTotal = tipFormCalc(formChildren[1].value , formChildren[3].value , formChildren[5].value);

    inputScreen.textContent = `$${tipTotal}`;
}

function submitDiscountForm(event) {


    let formChildren = event.target.parentElement.children;

    let discountTotal = discountFormCalc(formChildren[1].value , formChildren[3].value , formChildren[5].value);

   inputScreen.textContent = `$${discountTotal}`;

}


function calcItemInputs(element) {

    if (calcComponents.length === 0) {

            for (const item of element) {
            calcComponents.push(item);
    }
}
    console.log(calcComponents);
}

function menuEnableClickHandler(event) {

   menuIcon.setAttribute("hidden", true);

   console.log(event.target.textContent);

        for (const item of menuItems) {

            item.removeAttribute("hidden");
    }

    menuClicked = true;

    }

function displayThemeClickHandler(event) {

    menuDisableClickHandler(event);

    menuIcon.removeAttribute("hidden");

    if (!darkMode) {

        document.body.classList.add("Dark-Theme");
        document.body.querySelector(".calculator").classList.add("calculator-dark");


        switch (calculatorType.textContent) {
            case "Tip Calculator":
                for (const input of document.querySelector("#tipForm").children) {
                    input.classList.add("dark-calc-form-inputs");
                    darkMode = true;
                }
                break;
            case "Discount Calculator":
                for (const input of document.querySelector('#discountForm').children) {
                    input.classList.add("dark-calc-form-inputs");
                    darkMode = true;
                }
            case "Calculator":
                for (const input of document.querySelector(".action-buttons-grid").children) {
                    input.classList.add("dark-calc-input");
                darkMode = true;
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


        switch (calculatorType.textContent) {
            case "Tip Calculator":
                for (const input of document.querySelector("#tipForm").children) {
                    input.classList.remove("dark-calc-form-inputs");
                    darkMode = false;
                }
                break;
            case "Discount Calculator":
                for (const input of document.querySelector('#discountForm').children) {
                    input.classList.remove("dark-calc-form-inputs");
                    darkMode = false;
                }
            case "Calculator":
                for (const input of document.querySelector(".action-buttons-grid").children) {
                    input.classList.remove("dark-calc-input");
                darkMode = false;
                }
                break;

            default:
                break;
        }


        darkMode = false;
        event.target.textContent = "☾";

    }
}

function tipCalculatorClickHandler(event) {

    console.log("Tip Calculator button clicked");

    menuDisableClickHandler(event);

    menuIcon.removeAttribute("hidden");

    if (menuItems.length === 3) {

        document.querySelector(".List-menu").appendChild(CalculatorOption);
    }

    calcItemInputs(document.querySelector(".action-buttons-grid").children);

    document.querySelector(".action-buttons-grid").classList.add("action-buttons-grid-form");


    const tipFormContainer =  document.createElement("div");
        tipFormContainer.classList.add("calc-form-grid");

    const tipForm = document.createElement("div");
        tipForm.setAttribute("id", "tipForm");
        tipForm.setAttribute("method", "get");

    const totalLabel = document.createElement("label");
        totalLabel.textContent = "Bill Total: "
        totalLabel.setAttribute("for", "tip-form-total");
        totalLabel.classList.add("calc-form-labels");

    const totalInput = document.createElement("input");
        totalInput.setAttribute("id", "tip-form-total");
        totalInput.setAttribute("name", "tip-form-total")
        totalInput.setAttribute("type", "number");
        totalInput.classList.add("calc-form-inputs");


    const splitByLabel = document.createElement("label");
        splitByLabel.setAttribute("for", "splitByInput");
        splitByLabel.textContent = "People splitting bill: "
        splitByLabel.classList.add("calc-form-labels");

    const splitNumber = document.createElement("input");
        splitNumber.setAttribute("name", "splitByInput");
        splitNumber.setAttribute("id", "splitByInput");
        splitNumber.setAttribute("type", "number");
        splitNumber.classList.add("calc-form-inputs")


    const tipLabel = document.createElement("label");
        tipLabel.textContent = "Desired Tip percentage: ";
        tipLabel.setAttribute("for","tip");
        tipLabel.classList.add("calc-form-labels");

    const tipInput = document.createElement("input");
        tipInput.setAttribute("name", "tip");
        tipInput.setAttribute("id", "tip");
        tipInput.setAttribute("type", "number");
        tipInput.classList.add("calc-form-inputs");


    const tipSubmitButton = document.createElement("button");
        tipSubmitButton.classList.add("calc-form-button");
        tipSubmitButton.textContent = "Calculate Tip";
        tipSubmitButton.setAttribute("type", "submit");


    console.log(calcItemInputs);

    document.querySelector(".action-buttons-grid").replaceChildren(tipFormContainer);

    tipFormContainer.appendChild(tipForm);

    tipForm.appendChild(totalLabel);
    tipForm.appendChild(totalInput);
    tipForm.appendChild(splitByLabel);
    tipForm.appendChild(splitNumber);
    tipForm.appendChild(tipLabel);
    tipForm.appendChild(tipInput);
    tipForm.appendChild(tipSubmitButton);

    if(darkMode) {
        for (const input of document.querySelector('#tipForm').children) {

           if(!input.classList.contains("calc-form-button")) {

            input.classList.add("dark-calc-form-inputs");
        }
    }
}


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

    calcItemInputs(document.querySelector(".action-buttons-grid").children);

    document.querySelector(".action-buttons-grid").classList.add("action-buttons-grid-form");


    const discountFormContainer =  document.createElement("div");
          discountFormContainer.classList.add("calc-form-grid");

    const discountForm = document.createElement("div");
        discountForm.setAttribute("id", "discountForm");
        discountForm.setAttribute("method", "get");

    const totalLabel = document.createElement("label");
        totalLabel.textContent = "Item Price: "
        totalLabel.setAttribute("for", "discount-form-total");
        totalLabel.classList.add("calc-form-labels");

    const totalInput = document.createElement("input");
        totalInput.setAttribute("id", "discount-form-total");
        totalInput.setAttribute("name", "discount-form-total")
        totalInput.setAttribute("type", "number");
        totalInput.classList.add("calc-form-inputs");

    const discountLabel = document.createElement("label");
        discountLabel.setAttribute("for", "splitByInput");
        discountLabel.textContent = "Discount Percentage: "
        discountLabel.classList.add("calc-form-labels");

    const discountInput = document.createElement("input");
          discountInput.setAttribute("name", "splitByInput");
          discountInput.setAttribute("id", "splitByInput");
          discountInput.setAttribute("type", "number");
          discountInput.classList.add("calc-form-inputs")

    const taxLabel = document.createElement("label");
          taxLabel.textContent = "Tax percentage";
          taxLabel.setAttribute("for","tip");
          taxLabel.classList.add("calc-form-labels");

    const taxInput = document.createElement("input");
          taxInput.setAttribute("name", "tip");
          taxInput.setAttribute("id", "tip");
          taxInput.setAttribute("type", "number");
          taxInput.classList.add("calc-form-inputs");

    const discountSubmitButton = document.createElement("button");
          discountSubmitButton.classList.add("calc-form-button");
          discountSubmitButton.textContent = "Calculate Discount";
          discountSubmitButton.setAttribute("type", "submit");


    console.log(calcItemInputs);

    document.querySelector(".action-buttons-grid").replaceChildren(discountFormContainer);

    discountFormContainer.appendChild(discountForm);

    discountForm.appendChild(totalLabel);
    discountForm.appendChild(totalInput);
    discountForm.appendChild(discountLabel);
    discountForm.appendChild(discountInput);
    discountForm.appendChild(taxLabel);
    discountForm.appendChild(taxInput);
    discountForm.appendChild(discountSubmitButton);


    if(darkMode) {
        for (const input of document.querySelector('#discountForm').children) {

           if(!input.classList.contains("calc-form-button")) {

            input.classList.add("dark-calc-form-inputs");
        }
    }
}

    inputScreen.textContent = "";

    calculatorType.textContent = "Discount Calculator";

}

function calculatorClickHandler(event) {

    menuDisableClickHandler(event);
    menuIcon.removeAttribute("hidden");

    if (menuItems.length !== 3) {
        event.target.parentElement.removeChild(CalculatorOption);
    }

    document.querySelector(".action-buttons-grid").removeChild(document.querySelector(".calc-form-grid"));

    for (const item of calcComponents) {
        document.querySelector(".action-buttons-grid").appendChild(item);

        if(!darkMode) {
            item.classList.remove("dark-calc-input");
        }
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
                parenthesis(buttonText, currentScreenText);
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

function parenthesis (buttonText, currentScreenText, buttonValue) {


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
                // buttonValue += buttonValue;
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

    const stack = currentScreenText.split('');

    const orderOfOperations = [];

    console.log(stack);



        while (stack.length > 1) {

            let leftOperand;
            let rightOperand;
            let operator;
            let solution;

            console.log(`The current length of the stack is: ${stack.length}, \n`);


            if(stack.includes("(")) {

                console.log(`Stack includes expressions with Parenthesis!`);

                const innerOpenParenthsIndex = stack.lastIndexOf("(");
                const innerCloseParenthsIndex = stack.indexOf(")");
                const spliceIndexTotal =(innerCloseParenthsIndex + 1) - innerOpenParenthsIndex;

                let expression = stack.slice(innerOpenParenthsIndex, spliceIndexTotal);

                const placeholderIndex = innerOpenParenthsIndex;

                console.log(`The indexCount is ${spliceIndexTotal} \n`);
                console.log(`The first expression to solve is: ${expression} \n`);
                console.log(`The current stack is: ${stack} \n The new length is: ${stack.length} \n`);
                console.log(`The placeholder index in stack to insert solution is: ${innerOpenParenthsIndex} \n`);

                while (expression.length > 1) {


                    expression.map((char, index) => {

                        switch (char) {
                            case "x":
                                console.log(`${char} , found  at ${index}, adding to operation stack`);
                                orderOfOperations.push([multiply, index]);
                                break;
                            case "÷":
                                console.log(`${char} , found  at ${index}, adding to operation stack`);
                                orderOfOperations.push([divide, index]);
                                break;
                            case "+":
                                console.log(`${char} , found  at ${index}, adding to operation stack`);
                                orderOfOperations.push([add, index]);
                                break;
                            case "-":
                                console.log(`${char} , found  at ${index}, adding to operation stack`);
                                orderOfOperations.push([subtract, index]);
                                break;
                            default:
                                break;
                        }});

                        orderOfOperations.sort((a,b,c,d) => {(multiply,  divide, add, subtract)});

                        console.log(`The current order of operations is: ${orderOfOperations}`);


                        console.log(`Time to start solving the expression! \n Current Expression is: ${expression}`);

                        const isLastOperation = orderOfOperations.length === 1;

                        const currentOperationIndex = orderOfOperations[0][1];


                        console.log(`Is this the last operation? ${isLastOperation}, \n The Current Operation index is ${currentOperationIndex} \n`);


                        leftOperand = parseFloat(expression.slice(isLastOperation ? 1 : currentOperationIndex > orderOfOperations[1][1] ? orderOfOperations[1][1] + 1 : 1, currentOperationIndex).join('').trim());

                        operator = orderOfOperations[0][0];

                        rightOperand = parseFloat(expression.slice(currentOperationIndex +1, isLastOperation ? expression.length : orderOfOperations[1][1]).join('').trim());

                        console.log(`The left operand is: ${leftOperand} \n The operation is: ${operator} \n The rigth operand is: ${rightOperand}`);

                        solution = Calculate(leftOperand, operator, rightOperand);

                        console.log(`The current solution is ${solution} \n`);

                        const endingOfRightOperand = isLastOperation ? expression.length : orderOfOperations[1][1];
                        const startOfLeftOperand = isLastOperation ? 0 : currentOperationIndex > orderOfOperations[1][1] ? orderOfOperations[1][1] + 1 : 1
                        const expressionIndexCount = endingOfRightOperand - startOfLeftOperand;

                        console.log("The index count for splicing is: ", expressionIndexCount);

                        expression.splice(startOfLeftOperand, expressionIndexCount, solution);

                        console.log(`The spliced expression after solving first operation: ${expression} \n It's lenght is now ${expression.length} \n`);

                        orderOfOperations.length = 0;

                        console.log(orderOfOperations, " => should now be empty!");

                }

                console.log(placeholderIndex, spliceIndexTotal)
                console.log(stack);

                console.log(stack.length);

                stack.splice(placeholderIndex, spliceIndexTotal, expression.join());

                console.log(stack, "\n", stack.length);

            } else {
                console.log( `The current length of the stack is: ${stack.length} \n`);

                let expression = stack;


                while(expression.length > 1) {

                    expression.map((char, index) => {

                        switch (char) {
                            case "x":
                                console.log(`${char} , found  at ${index}, adding to operation stack`);
                                orderOfOperations.push([multiply, index]);
                                break;
                            case "÷":
                                console.log(`${char} , found  at ${index}, adding to operation stack`);
                                orderOfOperations.push([divide, index]);
                                break;
                            case "+":
                                console.log(`${char} , found  at ${index}, adding to operation stack`);
                                orderOfOperations.push([add, index]);
                                break;
                            case "-":
                                console.log(`${char} , found  at ${index}, adding to operation stack`);
                                orderOfOperations.push([subtract, index]);
                                break;
                            default:
                                break;
                        }});

                        orderOfOperations.sort((a,b,c,d) => {(multiply,  divide, add, subtract)});

                        console.log(`The current order of operations is: ${orderOfOperations}`);

                        console.log(`Time to start solving the expression! \n Current Expression is: ${expression}`);

                        const isLastOperation = orderOfOperations.length === 1;

                        const currentOperationIndex = orderOfOperations[0][1];


                        console.log(`Is this the last operation? ${isLastOperation}, \n The Current Operation index is ${currentOperationIndex} \n`);


                        leftOperand = parseFloat(expression.slice(isLastOperation ? 0 : currentOperationIndex > orderOfOperations[1][1] ? orderOfOperations[1][1] + 1 : 0, currentOperationIndex).join('').trim());

                        operator = orderOfOperations[0][0];

                        rightOperand = parseFloat(expression.slice(currentOperationIndex +1, isLastOperation ? expression.length : orderOfOperations[1][1]).join('').trim());

                        console.log(`The left operand is: ${leftOperand} \n The operation is: ${operator} \n The rigth operand is: ${rightOperand}`);

                        solution = Calculate(leftOperand, operator, rightOperand);

                        console.log(`The current solution is ${solution} \n`);

                        const endingOfRightOperand = isLastOperation ? expression.length : orderOfOperations[1][1];
                        const startOfLeftOperand = isLastOperation ? 0 : currentOperationIndex > orderOfOperations[1][1] ? orderOfOperations[1][1] + 1 : 0
                        const expressionIndexCount = endingOfRightOperand - startOfLeftOperand;

                        console.log("The index count for splicing is: ", expressionIndexCount);

                        expression.splice(startOfLeftOperand, expressionIndexCount, solution);

                        console.log(`The spliced expression after solving first operation: ${expression} \n It's lenght is now ${expression.length} \n`);

                        orderOfOperations.length = 0;

                        console.log(orderOfOperations, " => should now be empty!");
                }

                stack.splice(0, stack.length, expression.toString());
            }

            console.log(parseFloat(stack), stack.length);
            return parseFloat(stack.toString());
        }
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
