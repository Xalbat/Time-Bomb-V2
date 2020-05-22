import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeBombComponent } from './time-bomb.component';

describe('TimeBombComponent', () => {
  let component: TimeBombComponent;
  let fixture: ComponentFixture<TimeBombComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeBombComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeBombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
