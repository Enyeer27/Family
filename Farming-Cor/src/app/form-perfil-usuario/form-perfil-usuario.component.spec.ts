import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPerfilUsuarioComponent } from './form-perfil-usuario.component';

describe('FormPerfilUsuarioComponent', () => {
  let component: FormPerfilUsuarioComponent;
  let fixture: ComponentFixture<FormPerfilUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPerfilUsuarioComponent]
    });
    fixture = TestBed.createComponent(FormPerfilUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
