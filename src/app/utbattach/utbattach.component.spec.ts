import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtbattachComponent } from './utbattach.component';

describe('UtbattachComponent', () => {
  let component: UtbattachComponent;
  let fixture: ComponentFixture<UtbattachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtbattachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtbattachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
