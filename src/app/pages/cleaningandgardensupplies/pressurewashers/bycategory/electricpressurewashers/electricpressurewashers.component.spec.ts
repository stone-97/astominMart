import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricpressurewashersComponent } from './electricpressurewashers.component';

describe('ElectricpressurewashersComponent', () => {
  let component: ElectricpressurewashersComponent;
  let fixture: ComponentFixture<ElectricpressurewashersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectricpressurewashersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectricpressurewashersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
