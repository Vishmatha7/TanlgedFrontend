import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExapleComponent } from './exaple.component';

describe('ExapleComponent', () => {
  let component: ExapleComponent;
  let fixture: ComponentFixture<ExapleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExapleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExapleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
