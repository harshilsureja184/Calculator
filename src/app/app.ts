import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Display } from './display/display';
import { Buttons } from './buttons/buttons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Buttons , Display],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // Corrected here
})
export class App {
  protected readonly title = signal('calculator');
}