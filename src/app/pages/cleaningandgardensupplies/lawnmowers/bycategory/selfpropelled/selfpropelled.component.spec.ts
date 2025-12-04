import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfpropelledComponent } from './selfpropelled.component';

describe('SelfpropelledComponent', () => {
  let component: SelfpropelledComponent;
  let fixture: ComponentFixture<SelfpropelledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelfpropelledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelfpropelledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
