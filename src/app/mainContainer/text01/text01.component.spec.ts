import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text01Component } from './text01.component';

describe('Text01Component', () => {
  let component: Text01Component;
  let fixture: ComponentFixture<Text01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
