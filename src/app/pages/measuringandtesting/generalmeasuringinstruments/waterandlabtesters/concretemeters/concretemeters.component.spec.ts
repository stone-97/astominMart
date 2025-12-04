import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcretemetersComponent } from './concretemeters.component';

describe('ConcretemetersComponent', () => {
  let component: ConcretemetersComponent;
  let fixture: ComponentFixture<ConcretemetersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConcretemetersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConcretemetersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
