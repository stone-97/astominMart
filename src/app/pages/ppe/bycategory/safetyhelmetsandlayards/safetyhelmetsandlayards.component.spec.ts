import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyhelmetsandlayardsComponent } from './safetyhelmetsandlayards.component';

describe('SafetyhelmetsandlayardsComponent', () => {
  let component: SafetyhelmetsandlayardsComponent;
  let fixture: ComponentFixture<SafetyhelmetsandlayardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SafetyhelmetsandlayardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SafetyhelmetsandlayardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
