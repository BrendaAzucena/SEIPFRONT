import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtepComponent } from './artep.component';

describe('ArtepComponent', () => {
  let component: ArtepComponent;
  let fixture: ComponentFixture<ArtepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
