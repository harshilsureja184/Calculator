import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Arithmatic {
  displayValue: string = '0';
  private firstValue: number | null = null;
  private operator: string | null = null;

  handleInput(value: string) {
    if (value === 'C') {
      this.displayValue = '0';
      this.firstValue = null;
      this.operator = null;
      return;
    }

    if (!isNaN(Number(value))) { // Number input
      this.displayValue = this.displayValue === '0' ? value : this.displayValue + value;
      return;
    }

    if (['+', '-', '*', '/'].includes(value)) {
      this.firstValue = Number(this.displayValue);
      this.operator = value;
      this.displayValue = '';
      return;
    }

    if (value === '=' && this.firstValue !== null && this.operator) {
      const b = Number(this.displayValue);
      const a = this.firstValue;
      let result = 0;

      switch (this.operator) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = b === 0 ? 0 : a / b; break;
      }

      this.displayValue = result.toString();
      this.firstValue = null;
      this.operator = null;
    }
  }
}
