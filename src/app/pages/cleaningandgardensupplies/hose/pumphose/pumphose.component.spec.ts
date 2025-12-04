import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumphoseComponent } from './pumphose.component';

describe('PumphoseComponent', () => {
  let component: PumphoseComponent;
  let fixture: ComponentFixture<PumphoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PumphoseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PumphoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
