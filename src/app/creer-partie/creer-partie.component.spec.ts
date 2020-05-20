import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerPartieComponent } from './creer-partie.component';

describe('CreerPartieComponent', () => {
  let component: CreerPartieComponent;
  let fixture: ComponentFixture<CreerPartieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerPartieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerPartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
