import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelockersComponent } from './wheelockers.component';

describe('WheelockersComponent', () => {
  let component: WheelockersComponent;
  let fixture: ComponentFixture<WheelockersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WheelockersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WheelockersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
