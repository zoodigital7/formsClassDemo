import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.scss']
})
export class LoginReactiveComponent implements OnInit, OnDestroy {
  form: FormGroup
  formValues: any
  hasError = false
  errorMsg = null
  private subs = new Subscription()
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.createFormValues()
    this.createForm()
  }

  createFormValues() {
    this.formValues = {
      email: ['', Validators.required]
    }
  }

  createForm() {
    this.form = this.fb.group(this.formValues)
  }

  login() {
    if (this.form && this.form.invalid) {
      this.hasError = true
      this.errorMsg = 'Form is invalid'
      return
    }
    let email
    const form = this.form.value
    if (form && form.email) {
      email = form.email
      const params = { email: email }
      this.subs.add(
        this.userService.login(params).subscribe(data => {
          if (data && data.email && data.email !== '') {
            this.router.navigate(['dashboard'])
          } else {
            this.hasError = true
            this.errorMsg  = 'Email does not exist in our system!'
          }
        }, error => {
          this.hasError = true
          this.errorMsg = 'Email does not exist in our system!'
        })
      )
    } else {
      this.hasError = true
      this.errorMsg = 'Email cannot be blank'
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

}
