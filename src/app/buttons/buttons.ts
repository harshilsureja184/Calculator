import { Component } from '@angular/core';
import { Arithmatic } from '../arithmatic';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.html',
  styleUrls: ['./buttons.css']
})
export class Buttons {
  constructor(public arithmatic: Arithmatic) {}

  onClick(value: string) {
    this.arithmatic.handleInput(value);
  }
}
