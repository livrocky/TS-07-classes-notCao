/* eslint-disable no-sparse-arrays */
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable no-underscore-dangle */

interface Calculator {
  number1: number;
  number2: number;
  add(): number;
  minus(): number;
  // multiply(): number;
}

export default class Calc implements Calculator {
  constructor(public number1: number, public number2: number) {}

  add(): number {
    return this.number1 + this.number2;
  }
  minus(): number {
    return this.number1 - this.number2;
  }
  divide(): number {
    return this.number1 / this.number2;
  }
  multiply(): number {
    const sum: number = this.number1 + this.number2;
    console.log(`If you add ${this.number1} to ${this.number2} you get `);

    return this.number1 * this.number2;
  }

  // aprasyti minus()
}

interface SCalc extends Calculator {
  addProc(): number;
}

export class ScientificCalc extends Calc {
  addProc(): number {
    const proc = this.number1 * (this.number2 / 10 + 1);
    console.log(`if you add ${this.number2}% to ${this.number1} ===${proc}`);
    return proc;
  }
}
