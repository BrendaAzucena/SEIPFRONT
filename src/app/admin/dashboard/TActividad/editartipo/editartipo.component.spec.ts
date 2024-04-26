import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditartipoComponent } from './editartipo.component';

describe('EditartipoComponent', () => {
  let component: EditartipoComponent;
  let fixture: ComponentFixture<EditartipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditartipoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditartipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
