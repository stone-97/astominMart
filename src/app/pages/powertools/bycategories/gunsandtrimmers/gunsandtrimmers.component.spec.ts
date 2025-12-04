import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunsandtrimmersComponent } from './gunsandtrimmers.component';

describe('GunsandtrimmersComponent', () => {
  let component: GunsandtrimmersComponent;
  let fixture: ComponentFixture<GunsandtrimmersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GunsandtrimmersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GunsandtrimmersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
