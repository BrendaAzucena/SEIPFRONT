import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdmuniComponent } from './updmuni.component';

describe('UpdmuniComponent', () => {
  let component: UpdmuniComponent;
  let fixture: ComponentFixture<UpdmuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdmuniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdmuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
