import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunstateComponent } from './runstate.component';

describe('RunstateComponent', () => {
  let component: RunstateComponent;
  let fixture: ComponentFixture<RunstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
