import type { Theme } from '../types';

export function createDiscountCalculator(theme: Theme): HTMLElement {
  const container = document.createElement('div');
  container.className = 'calc-form-grid';

  const form = document.createElement('div');
  form.id = 'discountForm';
  form.setAttribute('method', 'get');

  form.innerHTML = `
    <label for="discount-form-total" class="calc-form-labels">Item Price: </label>
    <input type="number" id="discount-form-total" name="discount-form-total" class="calc-form-inputs" />
    <label for="discount-percentage" class="calc-form-labels">Discount Percentage: </label>
    <input type="number" id="discount-percentage" name="discount-percentage" class="calc-form-inputs" />
    <label for="tax" class="calc-form-labels">Tax percentage: </label>
    <input type="number" id="tax" name="tax" class="calc-form-inputs" />
    <button type="submit" class="calc-form-button">Calculate Discount</button>
  `;

  container.appendChild(form);

  if (theme === 'dark') {
    const inputs = form.querySelectorAll('.calc-form-inputs, .calc-form-labels');
    inputs.forEach((input) => {
      input.classList.add('dark-calc-form-inputs');
    });
  }

  return container;
}
