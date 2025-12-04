import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifebuoyComponent } from './lifebuoy.component';

describe('LifebuoyComponent', () => {
  let component: LifebuoyComponent;
  let fixture: ComponentFixture<LifebuoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifebuoyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifebuoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
