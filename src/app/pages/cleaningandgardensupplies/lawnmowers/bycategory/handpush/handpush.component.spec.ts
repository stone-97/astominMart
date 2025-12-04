import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandpushComponent } from './handpush.component';

describe('HandpushComponent', () => {
  let component: HandpushComponent;
  let fixture: ComponentFixture<HandpushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandpushComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
