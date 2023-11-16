import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevopersonajeComponent } from './nuevopersonaje.component';

describe('NuevopersonajeComponent', () => {
  let component: NuevopersonajeComponent;
  let fixture: ComponentFixture<NuevopersonajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevopersonajeComponent]
    });
    fixture = TestBed.createComponent(NuevopersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
