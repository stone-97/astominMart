import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinigrindersComponent } from './minigrinders.component';

describe('MinigrindersComponent', () => {
  let component: MinigrindersComponent;
  let fixture: ComponentFixture<MinigrindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinigrindersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinigrindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
