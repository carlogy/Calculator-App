import { getState, setMenuOpen } from '../state';

const menuIcon = document.querySelector('.menu-icon') as HTMLElement;
const menuItems = document.querySelector('.List-menu')?.children as HTMLCollectionOf<HTMLElement>;

export function menuEnableClickHandler(): void {
  menuIcon.setAttribute('hidden', 'true');
  if (menuItems) {
    for (const item of menuItems) {
      item.removeAttribute('hidden');
    }
  }
  setMenuOpen(true);
}

export function menuDisableClickHandler(): void {
  setMenuOpen(false);
  menuIcon.removeAttribute('hidden');
  if (menuItems) {
    for (const item of menuItems) {
      item.setAttribute('hidden', 'true');
    }
  }
}

export function menuClickHandler(event: Event): void {
  const state = getState();
  const target = event.target as HTMLElement;

  if (target.parentElement?.classList.contains('menu') || 
      target.classList.contains('menu-icon')) {
    if (!state.menuOpen) {
      menuEnableClickHandler();
    } else {
      menuDisableClickHandler();
    }
  }
}
