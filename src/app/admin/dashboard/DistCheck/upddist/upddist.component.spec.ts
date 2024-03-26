import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpddistComponent } from './upddist.component';

describe('UpddistComponent', () => {
  let component: UpddistComponent;
  let fixture: ComponentFixture<UpddistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpddistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpddistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
