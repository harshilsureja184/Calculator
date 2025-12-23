import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mathoperations } from './mathoperations';

describe('Mathoperations', () => {
  let component: Mathoperations;
  let fixture: ComponentFixture<Mathoperations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mathoperations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mathoperations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
