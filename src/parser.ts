import { add, subtract, multiply, divide, calculate } from './calculator';
import type { OperatorFn } from './types';

function getPriority(op: OperatorFn): number {
  if (op === multiply || op === divide) {
    return 0;
  }
  if (op === add || op === subtract) {
    return 1;
  }
  return 2;
}

function inputParser(currentScreenText: string): number {
  const stack = currentScreenText.split('').filter(char => char !== ' ');
  const orderOfOperations: [OperatorFn, number][] = [];

  while (stack.length > 1) {
    let leftOperand: number;
    let rightOperand: number;
    let operator: OperatorFn;
    let solution: number;

    if (stack.includes('(')) {
      const innerOpenParenthsIndex = stack.lastIndexOf('(');
      const innerCloseParenthsIndex = stack.indexOf(')');
      const spliceIndexTotal =
        innerCloseParenthsIndex + 1 - innerOpenParenthsIndex;

      const expression: (string | number)[] = stack.slice(
        innerOpenParenthsIndex,
        innerCloseParenthsIndex + 1
      );

      const placeholderIndex = innerOpenParenthsIndex;

      while (expression.length > 1) {
        orderOfOperations.length = 0;

        expression.map((char, index) => {
          switch (char) {
            case 'x':
              orderOfOperations.push([multiply, index]);
              break;
            case '÷':
              orderOfOperations.push([divide, index]);
              break;
            case '+':
              orderOfOperations.push([add, index]);
              break;
            case '-':
              orderOfOperations.push([subtract, index]);
              break;
          }
        });

        orderOfOperations.sort((a, b) => {
          const aPriority = getPriority(a[0]);
          const bPriority = getPriority(b[0]);
          if (aPriority !== bPriority) {
            return aPriority - bPriority;
          }
          return a[1] - b[1];
        });

        const isLastOperation = orderOfOperations.length === 1;
        const currentOperationIndex = orderOfOperations[0][1];

        leftOperand = parseFloat(
          expression
            .slice(
              isLastOperation
                ? 1
                : currentOperationIndex > orderOfOperations[1][1]
                  ? orderOfOperations[1][1] + 1
                  : 1,
              currentOperationIndex
            )
            .join('')
            .trim()
        );

        operator = orderOfOperations[0][0];

        rightOperand = parseFloat(
          expression
            .slice(
              currentOperationIndex + 1,
              isLastOperation ? expression.length : orderOfOperations[1][1]
            )
            .join('')
            .trim()
        );

        solution = calculate(leftOperand, operator, rightOperand)!;

        const endingOfRightOperand = isLastOperation
          ? expression.length
          : orderOfOperations[1][1];
        const startOfLeftOperand = isLastOperation
          ? 0
          : currentOperationIndex > orderOfOperations[1][1]
            ? orderOfOperations[1][1] + 1
            : 1;
        const expressionIndexCount = endingOfRightOperand - startOfLeftOperand;

        expression.splice(startOfLeftOperand, expressionIndexCount, solution);
      }

      stack.splice(placeholderIndex, spliceIndexTotal, expression.join());
    } else {
      const expression: (string | number)[] = stack;

      while (expression.length > 1) {
        orderOfOperations.length = 0;

        expression.map((char, index) => {
          switch (char) {
            case 'x':
              orderOfOperations.push([multiply, index]);
              break;
            case '÷':
              orderOfOperations.push([divide, index]);
              break;
            case '+':
              orderOfOperations.push([add, index]);
              break;
            case '-':
              orderOfOperations.push([subtract, index]);
              break;
          }
        });

        orderOfOperations.sort((a, b) => {
          const aPriority = getPriority(a[0]);
          const bPriority = getPriority(b[0]);
          if (aPriority !== bPriority) {
            return aPriority - bPriority;
          }
          return a[1] - b[1];
        });

        const isLastOperation = orderOfOperations.length === 1;
        const currentOperationIndex = orderOfOperations[0][1];

        const startOfLeftOperand = isLastOperation
          ? 0
          : currentOperationIndex > orderOfOperations[1][1]
            ? orderOfOperations[1][1] + 1
            : 0;

        leftOperand = parseFloat(
          expression
            .slice(startOfLeftOperand, currentOperationIndex)
            .join('')
            .trim()
        );

        operator = orderOfOperations[0][0];

        rightOperand = parseFloat(
          expression
            .slice(
              currentOperationIndex + 1,
              isLastOperation ? expression.length : orderOfOperations[1][1]
            )
            .join('')
            .trim()
        );

        solution = calculate(leftOperand, operator, rightOperand)!;

        const endingOfRightOperand = isLastOperation
          ? expression.length
          : orderOfOperations[1][1];
        const expressionIndexCount = endingOfRightOperand - startOfLeftOperand;

        expression.splice(startOfLeftOperand, expressionIndexCount, solution);
      }

      stack.splice(0, stack.length, expression.toString());
    }
  }
  return parseFloat(stack.toString());
}

export { inputParser };
