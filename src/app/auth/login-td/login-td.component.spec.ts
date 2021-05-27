import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTdComponent } from './login-td.component';

describe('LoginTdComponent', () => {
  let component: LoginTdComponent;
  let fixture: ComponentFixture<LoginTdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
