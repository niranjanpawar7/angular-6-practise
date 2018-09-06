import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteServiceClass } from '../quotes.service';
import { Quote } from '../quote.model';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})

export class QuotesDetailsComponent implements OnInit {
  @Input() quote: Quote;

  constructor(private quoteServiceClass: QuoteServiceClass, private route: ActivatedRoute) {}
    
  ngOnInit() {
  	this.getQuote();
    console.log('papaa', this.quote);
  }

  getQuote(): void {  
  	const id = this.route.snapshot.paramMap.get('id');  
	  this.quoteServiceClass.getQuote(id)
	    .subscribe(quote => this.quote = quote); 
	};

}
