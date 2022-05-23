import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDarkComponent } from './components/login-dark/login-dark.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logind', component: LoginDarkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
