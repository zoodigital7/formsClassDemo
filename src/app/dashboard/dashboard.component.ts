import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUser: User
  private subs = new Subscription()
  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.currentUser = this.userService.currentUserValue
  }

  ngOnInit(): void {
    this.subToCurrentUser()
  }

  subToCurrentUser() {
    this.subs.add(
      this.userService.currentUser.subscribe(user => {
        if (user) {
          this.currentUser = user
        } else {
          this.router.navigate(['/home'])
        }
      })
    )
  }

}
