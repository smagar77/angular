import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text02Component } from './text02.component';

describe('Text02Component', () => {
  let component: Text02Component;
  let fixture: ComponentFixture<Text02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
