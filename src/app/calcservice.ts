import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Calcservice {

   display = '0';
  isFinished = false;

  solve(): number | string {
    try {
      // Use Function constructor with template literal
      return new Function(`return ${this.display}`)();
    } catch {
      return 'Error';
    }
  }

  deleteOne() {
    if (this.isFinished) {
      this.deleteAll();
      return;
    }
  }
  deleteAll() {
    this.display = '0';
    this.isFinished = false;
  }
 
}
