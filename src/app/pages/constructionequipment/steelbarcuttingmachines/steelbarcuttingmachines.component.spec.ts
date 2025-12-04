import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteelbarcuttingmachinesComponent } from './steelbarcuttingmachines.component';

describe('SteelbarcuttingmachinesComponent', () => {
  let component: SteelbarcuttingmachinesComponent;
  let fixture: ComponentFixture<SteelbarcuttingmachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SteelbarcuttingmachinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteelbarcuttingmachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
