import type { Theme } from '../types';

export function createBasicCalculator(theme: Theme): HTMLButtonElement[] {
  const buttons: HTMLButtonElement[] = [];

  const buttonConfigs = [
    { text: 'C', className: 'calc-input' },
    { text: '⌫', className: 'calc-input' },
    { text: '()', className: 'calc-input', value: '()' },
    { text: '+', className: 'calc-input operation', value: '+' },
    { text: '7', className: 'calc-input', value: '7' },
    { text: '8', className: 'calc-input', value: '8' },
    { text: '9', className: 'calc-input', value: '9' },
    { text: '-', className: 'calc-input operation', value: '-' },
    { text: '4', className: 'calc-input', value: '4' },
    { text: '5', className: 'calc-input', value: '5' },
    { text: '6', className: 'calc-input', value: '6' },
    { text: 'x', className: 'calc-input operation', value: 'x' },
    { text: '1', className: 'calc-input', value: '1' },
    { text: '2', className: 'calc-input', value: '2' },
    { text: '3', className: 'calc-input', value: '3' },
    { text: '÷', className: 'calc-input operation', value: '÷' },
    { text: '.', className: 'calc-input bottom-left', value: '.' },
    { text: '0', className: 'calc-input', value: '0' },
    { text: '%', className: 'calc-input', value: '%' },
    { text: '=', className: 'calc-input bottom-right', value: '=' },
  ];

  buttonConfigs.forEach((btn) => {
    const button = document.createElement('button');
    button.textContent = btn.text;
    button.className = btn.className;
    if ('value' in btn && btn.value) {
      button.setAttribute('value', btn.value);
    }
    buttons.push(button);
  });

  if (theme === 'dark') {
    buttons.forEach((btn) => btn.classList.add('dark-calc-input'));
  }

  return buttons;
}
