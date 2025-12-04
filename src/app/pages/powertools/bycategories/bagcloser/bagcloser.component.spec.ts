import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagcloserComponent } from './bagcloser.component';

describe('BagcloserComponent', () => {
  let component: BagcloserComponent;
  let fixture: ComponentFixture<BagcloserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BagcloserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BagcloserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
