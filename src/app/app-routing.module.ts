import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './users/users.component';

// Custom components


const routes: Routes = [
{ path: '', redirectTo: '/registration', pathMatch: 'full' },
{ path : 'login', component : LoginComponent},
{ path : 'registration', component : RegistrationComponent },
{ path: 'users', component : UsersComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule { }