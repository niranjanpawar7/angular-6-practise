import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quote } from './quote.model';
import { QUOTES } from  './mock-quotes'

@Injectable({
  providedIn: 'root'
})

export class QuoteServiceClass {

  constructor() { }

  getQuotes(): Observable<Quote[]> { 
	  return of(QUOTES);
	};

	getQuote(id: string): Observable<Quote> { 
	  return of(QUOTES.find(quote => quote.id === id));
	}

	getAuthorData(id){ 
			return of(QUOTES.filter(quote => quote.author['id'] == id)); 
	}

}