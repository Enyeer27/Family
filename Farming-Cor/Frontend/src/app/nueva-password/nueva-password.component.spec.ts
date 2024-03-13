import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPasswordComponent } from './nueva-password.component';

describe('NuevaPasswordComponent', () => {
  let component: NuevaPasswordComponent;
  let fixture: ComponentFixture<NuevaPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaPasswordComponent]
    });
    fixture = TestBed.createComponent(NuevaPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
