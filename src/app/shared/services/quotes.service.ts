import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class QuoteServiceClass {

  constructor(private http:HttpClient) { }

  getQuotes(): Observable<any> { 
		     return this.http.get('http://localhost:4200/assets/quotes.json');
	};

}