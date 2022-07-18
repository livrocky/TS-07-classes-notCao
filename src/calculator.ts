import Calc from './class/Calc';

// nusitaikom
const num1InputEl = document.getElementById('n1') as HTMLInputElement | null;
const num2InputEl = document.getElementById('n2') as HTMLInputElement | null;
const caclulateEl = document.getElementById('caclulate') as HTMLButtonElement | null;
const resultEl = document.getElementById('result') as HTMLSpanElement | null;

caclulateEl?.addEventListener('click', () => {
  Calc;
});
