function add(num1, num2) {
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

function tipFormCalc(total, splitByNumber, tipPercetage) {
  let subTotal = multiply(total, add(1, divide(tipPercetage, 100)));

  return splitByNumber !== 0 ? divide(subTotal, splitByNumber) : subTotal;
}

function discountFormCalc(itemPrice, discountPercentage, taxPercentage) {
  //to do review feedback received on the calc!
  let discountSubTotal = divide(
    itemPrice,
    add(1, divide(discountPercentage, 100)),
  );

  return multiply(discountSubTotal, add(1, divide(taxPercentage, 100)));
}

function calculate(num1, operation, num2) {
  try {
    return operation(num1, num2);
  } catch (error) {
    console.log(error);
  }
}

export {
  add,
  subtract,
  multiply,
  divide,
  tipFormCalc,
  discountFormCalc,
  calculate,
};
