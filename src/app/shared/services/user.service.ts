import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { UserList } from '../lists/user-list';
import { User } from '../models/user';
import { of } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersList = UserList
  private currentUserSubject: BehaviorSubject<User>
  public currentUser: Observable<User>
  constructor(
    private router: Router,
    private storage: LocalStorageService
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(this.storage.getItem('currentUser'))
    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value
  }

  setCurrentUser(user: User) {
    this.currentUserSubject.next(user)
  }

  login(params): Observable<any> {
    const foundUser = this.usersList.find(x => x.email === params.email)
    debugger
    if (foundUser) {
      this.storage.setItem('currentUser', foundUser)
      return of(foundUser)
    } else {
      this.storage.setItem('currentUser', null)
      this.storage.removeItem('currentUser')
      return of(throwError({success: false, errorMsg: 'Could not find that user'}))
    }
  }

  signup(params): Observable<User> {
    const newUser = new User(params)
    this.storage.setItem('currentUser', newUser)
    this.usersList.push(newUser)
    return of(newUser)
  }

  logout(params) {
    this.currentUserSubject.next(null)
    this.storage.setItem('currentUser', null)
    this.storage.removeItem('currentUser')
    this.router.navigate(['/login'])
  }


}
