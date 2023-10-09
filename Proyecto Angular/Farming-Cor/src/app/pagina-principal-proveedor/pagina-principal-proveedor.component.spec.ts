import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrincipalProveedorComponent } from './pagina-principal-proveedor.component';

describe('PaginaPrincipalProveedorComponent', () => {
  let component: PaginaPrincipalProveedorComponent;
  let fixture: ComponentFixture<PaginaPrincipalProveedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaPrincipalProveedorComponent]
    });
    fixture = TestBed.createComponent(PaginaPrincipalProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
