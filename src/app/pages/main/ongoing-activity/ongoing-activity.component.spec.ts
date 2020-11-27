import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingActivityComponent } from './ongoing-activity.component';

describe('OngoingActivityComponent', () => {
  let component: OngoingActivityComponent;
  let fixture: ComponentFixture<OngoingActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
