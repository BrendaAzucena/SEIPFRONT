import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoactComponent } from './tipoact.component';

describe('TipoactComponent', () => {
  let component: TipoactComponent;
  let fixture: ComponentFixture<TipoactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
