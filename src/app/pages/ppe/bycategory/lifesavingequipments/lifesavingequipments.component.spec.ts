import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifesavingequipmentsComponent } from './lifesavingequipments.component';

describe('LifesavingequipmentsComponent', () => {
  let component: LifesavingequipmentsComponent;
  let fixture: ComponentFixture<LifesavingequipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifesavingequipmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifesavingequipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
