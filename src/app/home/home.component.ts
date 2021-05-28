import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  routeToLoginTd() {
    debugger
    this.router.navigate(['login-td'])
  }

  routeToLoginReactive() {
    this.router.navigate(['login-reactive'])
  }

  routeToSignupTd() {
    this.router.navigate(['signup-td'])
  }

  routeToSignupReactive() {
    this.router.navigate(['signup-reactive'])
  }


}
