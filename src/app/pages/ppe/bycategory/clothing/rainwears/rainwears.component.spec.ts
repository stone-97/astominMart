import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainwearsComponent } from './rainwears.component';

describe('RainwearsComponent', () => {
  let component: RainwearsComponent;
  let fixture: ComponentFixture<RainwearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RainwearsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RainwearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
