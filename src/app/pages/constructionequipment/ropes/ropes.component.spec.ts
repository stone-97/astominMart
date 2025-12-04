import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopesComponent } from './ropes.component';

describe('RopesComponent', () => {
  let component: RopesComponent;
  let fixture: ComponentFixture<RopesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RopesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
