import { Component, inject } from '@angular/core';
import { Calcservice } from '../calcservice';
import { Mathoperations } from '../mathoperations/mathoperations';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [Mathoperations],
  template: './button.html',
  styleUrl: './button.css',
})
export class Button {
  public calc = inject(Calcservice);

  number(n: number) {
    if (this.calc.isFinished) {
      this.clear();
    }
    if (this.calc.display === '0') {
      this.calc.display = n.toString();
    } else {
      this.calc.display += n.toString();
    }
  }

  operator(symbol: string) {
    if (this.calc.isFinished) {
      this.clear();
    }
    this.calc.display += ` ${symbol} `;
  }

  equal() {
    if (this.calc.isFinished || this.calc.display === '0') return;

    const result = this.calc.solve();
    this.calc.display = result.toString();
    this.calc.isFinished = true;
  }

  clear() {
    this.calc.deleteAll();
  }

  deleteOne() {
    this.calc.deleteOne();
    }
}
