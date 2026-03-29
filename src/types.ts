export type Operation = '+' | '-' | '×' | '÷' | '%' | '*' | '/' | 'x';
export type OperatorFn = (a: number, b: number) => number;
export type CalcMode = 'basic' | 'tip' | 'discount';
export type Theme = 'light' | 'dark';

export interface AppState {
  mode: CalcMode;
  theme: Theme;
  menuOpen: boolean;
  calcInputs: string;
}

export interface TipFormValues {
  total: number;
  splitBy: number;
  tipPercentage: number;
}

export interface DiscountFormValues {
  itemPrice: number;
  discountPercentage: number;
  taxPercentage: number;
}
