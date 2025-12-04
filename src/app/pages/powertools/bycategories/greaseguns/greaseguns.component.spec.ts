import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreasegunsComponent } from './greaseguns.component';

describe('GreasegunsComponent', () => {
  let component: GreasegunsComponent;
  let fixture: ComponentFixture<GreasegunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GreasegunsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreasegunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
