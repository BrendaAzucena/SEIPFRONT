import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UEFComponent } from './uef.component';

describe('UEFComponent', () => {
  let component: UEFComponent;
  let fixture: ComponentFixture<UEFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UEFComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UEFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
