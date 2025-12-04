import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterhoseComponent } from './waterhose.component';

describe('WaterhoseComponent', () => {
  let component: WaterhoseComponent;
  let fixture: ComponentFixture<WaterhoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaterhoseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaterhoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
