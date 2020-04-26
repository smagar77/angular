import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorningComponent } from './worning.component';

describe('WorningComponent', () => {
  let component: WorningComponent;
  let fixture: ComponentFixture<WorningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
