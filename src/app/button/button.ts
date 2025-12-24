import { Component, inject } from '@angular/core';
import { Calcservice } from '../calcservice';
import { Mathoperations } from '../mathoperations/mathoperations';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [Mathoperations],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  public calc = inject(Calcservice);

  number(value: number | string) {
    if (this.calc.isFinished) this.clear();

    // Get last number part (after last operator)
    const parts = this.calc.result.split(' ');
    const lastPart = parts[parts.length - 1];

    // Prevent multiple decimals in the same number
    if (value === '.' && lastPart.includes('.')) return;

    if (this.calc.result === '0' && value !== '.') {
      this.calc.result = value.toString();
    } else {
      this.calc.result += value.toString();
    }
  }

  clear() {
    this.calc.result = '0';
    this.calc.isFinished = false;
  }


  operator(symbol: string) {
    if (this.calc.isFinished) {
      this.calc.result = this.calc.result.split('=')[1].trim();
      this.calc.isFinished = false;
    }
    this.calc.result += ` ${symbol} `;
  }


  equal() {
    // Convert result string into tokens
    let tokens = this.calc.result.split(' ');

    // First handle * and /
    let i = 0;
    while (i < tokens.length) {
      if (tokens[i] === '*' || tokens[i] === '/') {
        const left = Number(tokens[i - 1]);
        const right = Number(tokens[i + 1]);

        let temp = 0;
        if (tokens[i] === '*') temp = this.calc.mul(left, right);
        if (tokens[i] === '/') temp = this.calc.div(left, right);

        // Replace the operation with result
        tokens.splice(i - 1, 3, temp.toString());
        i = 0; // restart scan
      } else {
        i++;
      }
    }

    // Then handle + and -
    let result = Number(tokens[0]);
    for (let j = 1; j < tokens.length; j += 2) {
      const operator = tokens[j];
      const value = Number(tokens[j + 1]);

      if (operator === '+') result = this.calc.add(result, value);
      if (operator === '-') result = this.calc.sub(result, value);
    }

    this.calc.result += ` = ${result}`;
    this.calc.isFinished = true;


  }
}