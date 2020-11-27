import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnreleasedActivityComponent } from './unreleased-activity.component';

describe('UnreleasedActivityComponent', () => {
  let component: UnreleasedActivityComponent;
  let fixture: ComponentFixture<UnreleasedActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnreleasedActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnreleasedActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
