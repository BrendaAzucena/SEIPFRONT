import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubiertaComponent } from './cubierta.component';

describe('CubiertaComponent', () => {
  let component: CubiertaComponent;
  let fixture: ComponentFixture<CubiertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CubiertaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CubiertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
