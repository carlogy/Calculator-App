import type { OperatorFn } from './types';

export function add(num1: number, num2: number): number {
  return num1 + num2;
}

export function subtract(num1: number, num2: number): number {
  return num1 - num2;
}

export function multiply(num1: number, num2: number): number {
  return num1 * num2;
}

export function divide(num1: number, num2: number): number {
  return num1 / num2;
}

export function tipFormCalc(
  total: number,
  splitByNumber: number,
  tipPercentage: number
): number {
  const subTotal = multiply(total, add(1, divide(tipPercentage, 100)));
  return splitByNumber !== 0 ? divide(subTotal, splitByNumber) : subTotal;
}

export function discountFormCalc(
  itemPrice: number,
  discountPercentage: number,
  taxPercentage: number
): number {
  const discountSubTotal = divide(
    itemPrice,
    add(1, divide(discountPercentage, 100))
  );
  return multiply(discountSubTotal, add(1, divide(taxPercentage, 100)));
}

export function calculate(
  num1: number,
  operation: OperatorFn,
  num2: number
): number | undefined {
  try {
    return operation(num1, num2);
  } catch (error) {
    return undefined;
  }
}
