import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiegrindersComponent } from './diegrinders.component';

describe('DiegrindersComponent', () => {
  let component: DiegrindersComponent;
  let fixture: ComponentFixture<DiegrindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiegrindersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiegrindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
