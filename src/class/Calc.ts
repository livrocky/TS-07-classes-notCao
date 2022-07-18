/* eslint-disable no-sparse-arrays */
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable no-underscore-dangle */

class Calc {
  // firstName, lastName,
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
}

const calculator = new Calc(10, 10);
console.log('calculator===', calculator);
console.log('calculator.add()===', calculator.add());

class ScientificCalc extends Calc {
  //   constructor(number1: number, number2: number) {
  //     // super === Person.contstrutor()
  //     super(number1, number2);
  //   }
}
