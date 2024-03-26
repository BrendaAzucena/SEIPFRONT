import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdlocComponent } from './updloc.component';

describe('UpdlocComponent', () => {
  let component: UpdlocComponent;
  let fixture: ComponentFixture<UpdlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdlocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
