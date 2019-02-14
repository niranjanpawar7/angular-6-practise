import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { QuotesModel } from '../../model/QuotesModel'


@Injectable({
  providedIn: 'root'
})

export class QuoteServiceClass {

  constructor(private http:HttpClient) { }

  getQuotes(): Observable<QuotesModel[]> { 
		     return this.http.get<QuotesModel[]>('http://localhost:4200/assets/quotes.json');
	};

}