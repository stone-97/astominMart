import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpgcountingmetersComponent } from './lpgcountingmeters.component';

describe('LpgcountingmetersComponent', () => {
  let component: LpgcountingmetersComponent;
  let fixture: ComponentFixture<LpgcountingmetersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LpgcountingmetersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LpgcountingmetersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
