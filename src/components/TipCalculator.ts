import type { Theme } from '../types';

export function createTipCalculator(theme: Theme): HTMLElement {
  const container = document.createElement('div');
  container.className = 'calc-form-grid';

  const form = document.createElement('div');
  form.id = 'tipForm';
  form.setAttribute('method', 'get');

  form.innerHTML = `
    <label for="tip-form-total" class="calc-form-labels">Bill Total: </label>
    <input type="number" id="tip-form-total" name="tip-form-total" class="calc-form-inputs" />
    <label for="splitByInput" class="calc-form-labels">People splitting bill: </label>
    <input type="number" id="splitByInput" name="splitByInput" class="calc-form-inputs" />
    <label for="tip" class="calc-form-labels">Desired Tip percentage: </label>
    <input type="number" id="tip" name="tip" class="calc-form-inputs" />
    <button type="submit" class="calc-form-button">Calculate Tip</button>
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
