import type { AppState, CalcMode, Theme } from './types';

const state: AppState = {
  mode: 'basic',
  theme: 'light',
  menuOpen: false,
  calcInputs: '',
};

export function getState(): AppState {
  return state;
}

export function setMode(mode: CalcMode): void {
  state.mode = mode;
}

export function setTheme(theme: Theme): void {
  state.theme = theme;
}

export function setMenuOpen(open: boolean): void {
  state.menuOpen = open;
}

export function setCalcInputs(inputs: string): void {
  state.calcInputs = inputs;
}
