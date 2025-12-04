import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyraincoatsandbootsComponent } from './safetyraincoatsandboots.component';

describe('SafetyraincoatsandbootsComponent', () => {
  let component: SafetyraincoatsandbootsComponent;
  let fixture: ComponentFixture<SafetyraincoatsandbootsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SafetyraincoatsandbootsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SafetyraincoatsandbootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
