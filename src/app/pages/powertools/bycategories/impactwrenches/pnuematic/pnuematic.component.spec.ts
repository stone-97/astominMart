import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnuematicComponent } from './pnuematic.component';

describe('PnuematicComponent', () => {
  let component: PnuematicComponent;
  let fixture: ComponentFixture<PnuematicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PnuematicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PnuematicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
