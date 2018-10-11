import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProffesionLsitComponent } from './proffesion-lsit.component';

describe('ProffesionLsitComponent', () => {
  let component: ProffesionLsitComponent;
  let fixture: ComponentFixture<ProffesionLsitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProffesionLsitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProffesionLsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
