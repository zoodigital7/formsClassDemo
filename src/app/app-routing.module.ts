import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginReactiveComponent } from './auth/login-reactive/login-reactive.component';
import { LoginTdComponent } from './auth/login-td/login-td.component';
import { SignupReactiveComponent } from './auth/signup-reactive/signup-reactive.component';
import { SignupTdComponent } from './auth/signup-td/signup-td.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login-td', component: LoginTdComponent },
  { path: 'login-reactive', component: LoginReactiveComponent },
  { path: 'signup-td', component: SignupTdComponent },
  { path: 'signup-reactive', component: SignupReactiveComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
