import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigningUpActivityComponent } from './signing-up-activity.component';

describe('SigningUpActivityComponent', () => {
  let component: SigningUpActivityComponent;
  let fixture: ComponentFixture<SigningUpActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigningUpActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigningUpActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
