import { getState, setTheme } from './state';
import { menuDisableClickHandler } from './handlers/menu';
import type { Theme } from './types';

const menuIcon = document.querySelector('.menu-icon') as HTMLElement;
const menuItems = document.querySelector('.List-menu') as HTMLElement;
const actionGrid = document.querySelector('.action-buttons-grid') as HTMLElement;

const THEME_KEY = 'theme';

export function initTheme(): void {
  const savedTheme = localStorage.getItem(THEME_KEY);

  let theme: Theme;
  if (savedTheme === 'light' || savedTheme === 'dark') {
    theme = savedTheme;
  } else {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme = systemDark ? 'dark' : 'light';
  }

  applyTheme(theme);
  setTheme(theme);
  updateThemeIcon(theme);
}

export function displayThemeClickHandler(_event: Event): void {
  const state = getState();
  const newTheme = state.theme === 'light' ? 'dark' : 'light';

  menuDisableClickHandler();
  menuIcon.removeAttribute('hidden');

  applyTheme(newTheme);
  setTheme(newTheme);
  localStorage.setItem(THEME_KEY, newTheme);
  updateThemeIcon(newTheme);
}

function applyTheme(theme: Theme): void {
  if (theme === 'dark') {
    document.body.classList.add('Dark-Theme');
    document.querySelector('.calculator')?.classList.add('calculator-dark');
    applyDarkButtonStyles();
  } else {
    document.body.classList.remove('Dark-Theme');
    document.querySelector('.calculator')?.classList.remove('calculator-dark');
    removeDarkButtonStyles();
  }
}

function applyDarkButtonStyles(): void {
  const buttons = actionGrid.querySelectorAll('.calc-input');
  buttons.forEach((btn) => {
    btn.classList.add('dark-calc-input');
  });
}

function removeDarkButtonStyles(): void {
  const buttons = actionGrid.querySelectorAll('.calc-input');
  buttons.forEach((btn) => {
    btn.classList.remove('dark-calc-input');
  });
}

function updateThemeIcon(theme: Theme): void {
  if (menuItems && menuItems.children[0]) {
    menuItems.children[0].textContent = theme === 'light' ? '☾' : '☀︎';
  }
}
