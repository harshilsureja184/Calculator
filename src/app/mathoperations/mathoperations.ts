import { Component, inject } from '@angular/core';
import { Calcservice } from '../calcservice';
import { Button } from '../button/button';

@Component({
  selector: 'app-mathoperations',
  standalone: true,
  templateUrl: './mathoperations.html',
  styleUrls: ['./mathoperations.css'],
})
export class Mathoperations {
  public calc = inject(Calcservice);
}
