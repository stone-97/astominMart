import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelanddesielkitsComponent } from './fuelanddesielkits.component';

describe('FuelanddesielkitsComponent', () => {
  let component: FuelanddesielkitsComponent;
  let fixture: ComponentFixture<FuelanddesielkitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuelanddesielkitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuelanddesielkitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
