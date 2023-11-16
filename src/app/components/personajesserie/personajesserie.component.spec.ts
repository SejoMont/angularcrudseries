import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesserieComponent } from './personajesserie.component';

describe('PersonajesserieComponent', () => {
  let component: PersonajesserieComponent;
  let fixture: ComponentFixture<PersonajesserieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonajesserieComponent]
    });
    fixture = TestBed.createComponent(PersonajesserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
