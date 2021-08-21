import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GPACalculatorComponent } from './gpacalculator.component';

describe('GPACalculatorComponent', () => {
  let component: GPACalculatorComponent;
  let fixture: ComponentFixture<GPACalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GPACalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GPACalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
