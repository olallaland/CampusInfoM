import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedActivityComponent } from './closed-activity.component';

describe('ClosedActivityComponent', () => {
  let component: ClosedActivityComponent;
  let fixture: ComponentFixture<ClosedActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
