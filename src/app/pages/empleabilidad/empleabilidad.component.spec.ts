import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleabilidadComponent } from './empleabilidad.component';

describe('EmpleabilidadComponent', () => {
  let component: EmpleabilidadComponent;
  let fixture: ComponentFixture<EmpleabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleabilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
