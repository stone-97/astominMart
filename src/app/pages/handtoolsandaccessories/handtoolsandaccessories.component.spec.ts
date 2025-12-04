import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandtoolsandaccessoriesComponent } from './handtoolsandaccessories.component';

describe('HandtoolsandaccessoriesComponent', () => {
  let component: HandtoolsandaccessoriesComponent;
  let fixture: ComponentFixture<HandtoolsandaccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandtoolsandaccessoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandtoolsandaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
