/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/lines-between-class-members */
export default class Transaction {
  timestamp: Date;
  constructor(
    public readonly from: string,
    public readonly to: string,
    public readonly amount: number
  ) {
    this.timestamp = new Date();
  }
}
