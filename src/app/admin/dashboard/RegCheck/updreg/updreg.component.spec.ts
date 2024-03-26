import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdregComponent } from './updreg.component';

describe('UpdregComponent', () => {
  let component: UpdregComponent;
  let fixture: ComponentFixture<UpdregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdregComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
