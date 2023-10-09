import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrincipalClienteComponent } from './pagina-principal-cliente.component';

describe('PaginaPrincipalClienteComponent', () => {
  let component: PaginaPrincipalClienteComponent;
  let fixture: ComponentFixture<PaginaPrincipalClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaPrincipalClienteComponent]
    });
    fixture = TestBed.createComponent(PaginaPrincipalClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
