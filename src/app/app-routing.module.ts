import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';

// Custom components


const routes: Routes = [
{ path: '', redirectTo: '/registration', pathMatch: 'full' },
{ path : 'login', component : LoginComponent},
{ path : 'registration', component : RegistrationComponent },
{ path: 'users', component : UsersComponent },
{ path: 'users-detail/:id', component : UserDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule { }