import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelmetersComponent } from './fuelmeters.component';

describe('FuelmetersComponent', () => {
  let component: FuelmetersComponent;
  let fixture: ComponentFixture<FuelmetersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuelmetersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuelmetersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
