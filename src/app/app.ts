import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './button/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] 
})
export class App {
  protected readonly title = signal('calculator');
}