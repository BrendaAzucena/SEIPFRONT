import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdproComponent } from './updpro.component';

describe('UpdproComponent', () => {
  let component: UpdproComponent;
  let fixture: ComponentFixture<UpdproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdproComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
