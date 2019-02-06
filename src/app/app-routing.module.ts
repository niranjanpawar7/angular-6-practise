import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard } from './auth.guard';

// Custom components


const routes: Routes = [
//{ path: '', redirectTo: '/registration', pathMatch: 'full', canActivate:[AuthGuard] },
{ path : 'login', component : LoginComponent },
{ path : 'registration', component : RegistrationComponent },
{ path: 'users', loadChildren:'./users/user.module#UserModule' },
{ path: 'users-detail/:id', component : UserDetailsComponent, canActivate:[AuthGuard] },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule { }