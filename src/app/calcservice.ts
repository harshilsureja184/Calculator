import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Calcservice {

  //  display = '0';
  // isFinished = false;

  // solve(): number | string {
  //   try {
  //     return new Function(`return ${this.display}`)();
  //   } catch {
  //     return 'Error';
  //   }
  // }

  // deleteOne() {
  //   if (this.isFinished) {
  //     this.deleteAll();
  //     return;
  //   }
  // }
  // deleteAll() {
  //   this.display = '0';
  //   this.isFinished = false;
  // }
 

   result = '0';
  isFinished = false;

  add(n1: number, n2: number) { return n1 + n2; }
  sub(n1: number, n2: number) { return n1 - n2; }
  mul(n1: number, n2: number) { return n1 * n2; }
  div(n1: number, n2: number) { return n2 !== 0 ? n1 / n2 : 0; }
}
