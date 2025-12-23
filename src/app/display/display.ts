import { Component } from '@angular/core';
import { Arithmatic } from '../arithmatic';

@Component({
  selector: 'app-display',
  templateUrl: './display.html',
  styleUrls: ['./display.css']
})
export class Display {
  constructor(public arithmatic: Arithmatic) {}
}
