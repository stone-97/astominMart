import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityknicesandbladesComponent } from './utilityknicesandblades.component';

describe('UtilityknicesandbladesComponent', () => {
  let component: UtilityknicesandbladesComponent;
  let fixture: ComponentFixture<UtilityknicesandbladesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UtilityknicesandbladesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UtilityknicesandbladesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
