import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom components
import { QuotesComponent } from './quotes/quotes.component'; 
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';

const routes: Routes = [
	{ path: '', redirectTo: '/quotes', pathMatch: 'full'}, 
	{ path: 'quotes', component: QuotesComponent },
	{ path: 'quotes/:id', component: QuotesDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule { }