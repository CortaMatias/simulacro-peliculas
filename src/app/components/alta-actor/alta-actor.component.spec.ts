import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaActorComponent } from './alta-actor.component';

describe('AltaActorComponent', () => {
  let component: AltaActorComponent;
  let fixture: ComponentFixture<AltaActorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaActorComponent]
    });
    fixture = TestBed.createComponent(AltaActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
