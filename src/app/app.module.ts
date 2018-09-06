import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component'; 
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { AppRoutingModule } from './/app-routing.module'; 

 

const appRoute : Routes  = [
  { path: '', component: QuotesComponent },
  { path: 'details', component: QuotesDetailsComponent },
]
 

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent, 
    QuotesDetailsComponent 
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoute), AppRoutingModule,
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
