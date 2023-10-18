import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPeliculaComponent } from './alta-pelicula.component';

describe('AltaPeliculaComponent', () => {
  let component: AltaPeliculaComponent;
  let fixture: ComponentFixture<AltaPeliculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaPeliculaComponent]
    });
    fixture = TestBed.createComponent(AltaPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
