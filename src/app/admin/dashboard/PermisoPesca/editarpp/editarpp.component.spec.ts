import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarppComponent } from './editarpp.component';

describe('EditarppComponent', () => {
  let component: EditarppComponent;
  let fixture: ComponentFixture<EditarppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
