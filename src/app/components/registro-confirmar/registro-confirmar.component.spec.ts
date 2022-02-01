import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroConfirmarComponent } from './registro-confirmar.component';

describe('RegistroConfirmarComponent', () => {
  let component: RegistroConfirmarComponent;
  let fixture: ComponentFixture<RegistroConfirmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroConfirmarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroConfirmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
