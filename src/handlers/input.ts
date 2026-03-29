import { getState, setCalcInputs } from '../state';
import { inputParser } from '../parser';
import type { Operation } from '../types';

const inputScreen = document.querySelector('.input-screen') as HTMLElement;

export function updateInput(buttonText: string): void {
  const state = getState();

  switch (buttonText) {
    case '=':
      solveProblem();
      break;
    case 'C':
      clearInput();
      break;
    case '⌫':
      backspaceInput();
      break;
    case '()':
      parenthesis();
      break;
    case '+':
    case '-':
    case 'x':
    case '÷':
      operator(buttonText as Operation);
      break;
    default:
      state.calcInputs === ''
        ? (state.calcInputs = buttonText)
        : (state.calcInputs += buttonText);
      break;
  }

  inputScreen.textContent = state.calcInputs;
}

function operator(buttonText: Operation): void {
  const state = getState();
  switch (buttonText) {
    case '+':
      state.calcInputs += ' + ';
      break;
    case '-':
      state.calcInputs += ' - ';
      break;
    case 'x':
      state.calcInputs += ' x ';
      break;
    case '÷':
      state.calcInputs += ' ÷ ';
      break;
  }
  setCalcInputs(state.calcInputs);
}

function parenthesis(): void {
  const state = getState();
  const currentText = state.calcInputs.trim().split('');

  if (!currentText.includes('(') && !currentText.includes(')')) {
    state.calcInputs += '(';
  } else if (
    currentText[currentText.length - 1] === '(' &&
    currentText.lastIndexOf(')') === -1
  ) {
    state.calcInputs += '(';
  } else if (
    !currentText.includes(')') && currentText[currentText.length - 1] !== 'x'
  ) {
    state.calcInputs += ')';
  } else if (
    currentText[currentText.length - 1] !== '÷' &&
    currentText[currentText.length - 1] !== '+' &&
    currentText[currentText.length - 1] !== '-' &&
    currentText[currentText.length - 1] !== ' '
  ) {
    state.calcInputs += ')';
  } else if (
    currentText.indexOf(')') === currentText.lastIndexOf(')') &&
    currentText.indexOf('(') !== currentText.lastIndexOf('(')
  ) {
    state.calcInputs += ')';
  }
  setCalcInputs(state.calcInputs);
}

function backspaceInput(): void {
  const state = getState();
  const newIndex = state.calcInputs.length - 1;
  state.calcInputs = state.calcInputs.substring(0, newIndex);
  setCalcInputs(state.calcInputs);
}

function clearInput(): void {
  const state = getState();
  state.calcInputs = '';
  setCalcInputs(state.calcInputs);
}

function solveProblem(): void {
  const state = getState();
  state.calcInputs = String(inputParser(state.calcInputs));
  setCalcInputs(state.calcInputs);
}

export function handleKeydown(event: KeyboardEvent): void {
  const state = getState();
  let currentKey = event.key;

  if (state.mode !== 'basic') return;

  if (currentKey.charCodeAt(0) >= 48 && currentKey.charCodeAt(0) <= 57) {
    updateInput(event.key);
    return;
  }

  switch (currentKey) {
    case '+':
    case '-':
    case '*':
    case '/':
    case 'x':
    case 'Escape':
    case 'Enter':
    case 'Backspace':
      if (currentKey === 'Escape') {
        currentKey = 'C';
      } else if (currentKey === 'Backspace') {
        currentKey = '⌫';
      } else if (currentKey === 'Enter') {
        currentKey = '=';
      }
      updateInput(currentKey);
      break;
  }
}
