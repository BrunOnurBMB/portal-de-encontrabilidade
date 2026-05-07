import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTeste } from './pagina-teste';

describe('PaginaTeste', () => {
  let component: PaginaTeste;
  let fixture: ComponentFixture<PaginaTeste>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaTeste],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaTeste);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
