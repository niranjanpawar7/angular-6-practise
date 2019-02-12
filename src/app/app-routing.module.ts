import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserListingComponent } from './user-listing/user-listing.component';

import { AuthGuard } from './auth.guard';

// Custom components


const routes: Routes = [
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path : 'login', component : LoginComponent },
{ path : 'registration', component : RegistrationComponent },
{ path : 'userlist', component : UserListingComponent }, 
{ path: 'users', loadChildren:'./users/user.module#UserModule' },
{ path: 'users-detail/:id', component : UserDetailsComponent, canActivate:[AuthGuard] },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule { }