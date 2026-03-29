import { getState, setMode, setCalcInputs, setMenuOpen } from '../state';
import { tipFormCalc, discountFormCalc } from '../calculator';
import { createBasicCalculator, createTipCalculator, createDiscountCalculator } from '../components';
import type { CalcMode } from '../types';

const menuIcon = document.querySelector('.menu-icon') as HTMLElement;
const inputScreen = document.querySelector('.input-screen') as HTMLElement;
const calculatorType = document.querySelector('.Calc-type') as HTMLElement;
const actionGrid = document.querySelector('.action-buttons-grid') as HTMLElement;
const menuItems = document.querySelector('.List-menu') as HTMLElement;

const CalculatorOption = document.createElement('li');
CalculatorOption.textContent = 'Calculator';
CalculatorOption.classList.add('List-item');
CalculatorOption.dataset.action = 'calculator';

export function switchCalculator(mode: CalcMode): void {
  const state = getState();

  menuDisableClickHandler();
  menuIcon.removeAttribute('hidden');

  if (mode === 'basic') {
    if (menuItems.children.length !== 3) {
      menuItems.removeChild(CalculatorOption);
    }
    actionGrid.replaceChildren();
    const buttons = createBasicCalculator(state.theme);
    buttons.forEach(btn => actionGrid.appendChild(btn));
    calculatorType.textContent = 'Calculator';
    inputScreen.textContent = state.calcInputs;
  } else {
    if (menuItems.children.length === 3) {
      menuItems.appendChild(CalculatorOption);
    }

    if (mode === 'tip') {
      actionGrid.replaceChildren();
      const tipUI = createTipCalculator(state.theme);
      actionGrid.appendChild(tipUI);
      calculatorType.textContent = 'Tip Calculator';
      inputScreen.textContent = '';
    } else if (mode === 'discount') {
      actionGrid.replaceChildren();
      const discountUI = createDiscountCalculator(state.theme);
      actionGrid.appendChild(discountUI);
      calculatorType.textContent = 'Discount Calculator';
      inputScreen.textContent = '';
    }
  }

  actionGrid.classList.toggle('action-buttons-grid-form', mode !== 'basic');
  setMode(mode);
}

export function tipCalculatorClickHandler(): void {
  switchCalculator('tip');
}

export function discountCalculatorClickHandler(): void {
  switchCalculator('discount');
}

export function calculatorClickHandler(): void {
  switchCalculator('basic');
}

export function submitTipForm(_event: Event): void {
  const form = document.getElementById('tipForm') as HTMLFormElement;
  const total = parseFloat((form.querySelector('#tip-form-total') as HTMLInputElement).value) || 0;
  const splitBy = parseFloat((form.querySelector('#splitByInput') as HTMLInputElement).value) || 0;
  const tipPct = parseFloat((form.querySelector('#tip') as HTMLInputElement).value) || 0;

  const tipTotal = tipFormCalc(total, splitBy, tipPct);
  inputScreen.textContent = `$${tipTotal}`;
  setCalcInputs(String(tipTotal));
}

export function submitDiscountForm(_event: Event): void {
  const form = document.getElementById('discountForm') as HTMLFormElement;
  const itemPrice = parseFloat((form.querySelector('#discount-form-total') as HTMLInputElement).value) || 0;
  const discountPct = parseFloat((form.querySelector('#discount-percentage') as HTMLInputElement).value) || 0;
  const taxPct = parseFloat((form.querySelector('#tax') as HTMLInputElement).value) || 0;

  const discountTotal = discountFormCalc(itemPrice, discountPct, taxPct);
  inputScreen.textContent = `$${discountTotal}`;
  setCalcInputs(String(discountTotal));
}

function menuDisableClickHandler(): void {
  setMenuOpen(false);
  menuIcon.removeAttribute('hidden');
  if (menuItems) {
    const items = menuItems.children;
    for (let i = 0; i < items.length; i++) {
      items[i].setAttribute('hidden', 'true');
    }
  }
}
