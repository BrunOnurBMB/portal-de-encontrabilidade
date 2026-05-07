import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraBruno } from './calculadora-bruno';

describe('CalculadoraBruno', () => {
  let component: CalculadoraBruno;
  let fixture: ComponentFixture<CalculadoraBruno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraBruno],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculadoraBruno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
