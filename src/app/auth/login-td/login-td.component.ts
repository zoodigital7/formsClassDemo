import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login-td',
  templateUrl: './login-td.component.html',
  styleUrls: ['./login-td.component.scss']
})
export class LoginTdComponent implements OnInit, OnDestroy {
  email: any
  hasError = false
  errorMsg: any
  private subs = new Subscription()
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  login() {
    if (this.email && this.email !== '') {
      const params = { email: this.email }
      this.subs.add(
        this.userService.login(params).subscribe(data => {
          debugger
          if (data && data.email && data.email !== '') {
            this.router.navigate(['dashboard'])
          } else {
            this.hasError = true
            this.errorMsg  = 'Email does not exist in our system!'
          }
        }, error => {
          debugger
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
