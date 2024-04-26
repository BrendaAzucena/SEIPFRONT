import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcubiertaComponent } from './editcubierta.component';

describe('EditcubiertaComponent', () => {
  let component: EditcubiertaComponent;
  let fixture: ComponentFixture<EditcubiertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditcubiertaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditcubiertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
