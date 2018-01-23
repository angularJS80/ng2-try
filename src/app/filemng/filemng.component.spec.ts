import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilemngComponent } from './filemng.component';

describe('FilemngComponent', () => {
  let component: FilemngComponent;
  let fixture: ComponentFixture<FilemngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilemngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilemngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
