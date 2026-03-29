import './styles.css';
import { updateInput, handleKeydown } from './handlers/input';
import { menuClickHandler, menuDisableClickHandler } from './handlers/menu';
import { initTheme, displayThemeClickHandler } from './theme';
import {
  tipCalculatorClickHandler,
  discountCalculatorClickHandler,
  calculatorClickHandler,
  submitTipForm,
  submitDiscountForm,
} from './handlers/calculator';

const menuIcon = document.querySelector('.menu-icon') as HTMLElement;
const actionGrid = document.querySelector('.action-buttons-grid') as HTMLElement;

function initApp(): void {
  initTheme();
  window.addEventListener('mousedown', handleMouseDown);
  window.addEventListener('keydown', handleKeydown);
}

function handleMouseDown(event: MouseEvent): void {
  const target = event.target as HTMLElement;

  if (
    target.localName === 'body' ||
    target.localName === 'html' ||
    target.classList.contains('input-screen') ||
    target.classList.contains('Calc-type') ||
    target.parentElement?.classList.contains('nav-bar') ||
    target.classList.contains('calculator')
  ) {
    menuDisableClickHandler();
    return;
  }

  if (
    target.parentElement === actionGrid &&
    !actionGrid.classList.contains('action-buttons-grid-form')
  ) {
    const text = target.textContent || '';
    updateInput(text);
    menuDisableClickHandler();
    return;
  }

  if (target.parentElement?.classList.contains('List-menu')) {
    const action = target.dataset.action;
    switch (action) {
      case 'theme':
        menuDisableClickHandler();
        displayThemeClickHandler(event);
        break;
      case 'tip-calc':
        tipCalculatorClickHandler();
        menuDisableClickHandler();
        break;
      case 'discount-calc':
        discountCalculatorClickHandler();
        menuDisableClickHandler();
        break;
      case 'calculator':
        calculatorClickHandler();
        menuDisableClickHandler();
        break;
    }
    return;
  }

  if (target.classList.contains('calc-form-button')) {
    const form = target.parentElement;
    if (form?.id === 'tipForm') {
      submitTipForm(event);
    } else if (form?.id === 'discountForm') {
      submitDiscountForm(event);
    }
    return;
  }

  if (target === menuIcon || target.parentElement?.classList.contains('menu')) {
    menuClickHandler(event);
  }
}

initApp();
