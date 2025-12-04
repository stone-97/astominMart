import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CautionsignsComponent } from './cautionsigns.component';

describe('CautionsignsComponent', () => {
  let component: CautionsignsComponent;
  let fixture: ComponentFixture<CautionsignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CautionsignsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CautionsignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
