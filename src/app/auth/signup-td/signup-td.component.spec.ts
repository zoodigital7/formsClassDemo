import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTdComponent } from './signup-td.component';

describe('SignupTdComponent', () => {
  let component: SignupTdComponent;
  let fixture: ComponentFixture<SignupTdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupTdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
