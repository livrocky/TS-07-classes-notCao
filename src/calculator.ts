/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Calc from './class/Calc.js';

// nusitaikom
const num1InputEl = document.getElementById('n1') as HTMLInputElement | null;
const num2InputEl = document.getElementById('n2') as HTMLInputElement | null;
const calculateEl = document.getElementById('calculate') as HTMLButtonElement | null;
const resultEl = document.getElementById('result') as HTMLSpanElement | null;
const selectEl = document.getElementById('action') as HTMLSelectElement | null;

const calculator = new Calc(10, 50);
console.log('calculator===', calculator);

console.log('calculator===', calculator.add());

// iskelti arrow funkcija is calculateEl sukurti atskira funkcija handleCalculations

calculateEl?.addEventListener('mousedown', (): void => {
  console.log('lifes good');
  if (!num1InputEl || !num2InputEl || !selectEl || !resultEl) return;
  const num1: number = num1InputEl.valueAsNumber;
  const num2: number = num2InputEl.valueAsNumber;
  const selectedOperationValue: string = selectEl.value;
  const calculator = new Calc(num1, num2);
  let result: number = 0;
  switch (selectedOperationValue) {
    case 'add':
      result = calculator.add();
      console.log('result ===', result);
      break;
    case 'minus':
      result = calculator.minus();
      break;
    default:
      throw new Error('Invalid operation');
  }
  resultEl.textContent = result.toString();
});

selectEl?.addEventListener('change', (): void => {
  console.log('change');
});
