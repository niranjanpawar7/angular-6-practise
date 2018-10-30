import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuoteServiceClass } from '../shared/services/quotes.service';
import {ISubscription} from "rxjs/Subscription";
 

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  panelOpenState = false;  
  subscription: ISubscription; 
  quoteData;
  constructor(private route : ActivatedRoute, private QuoteServiceClass: QuoteServiceClass) { }

  ngOnInit() { 
      const authorId = this.route.snapshot.paramMap.get('id');
      this.getUserData(authorId) 
  }

  getUserData(authorId){
  this.subscription = this.QuoteServiceClass.getQuotes()
    .subscribe(
      (response) =>{
        response.filter(item =>{
            if(item.author.id == authorId)
            {
                this.quoteData = item;
            }
        })
      },
      (error)=>{
          console.log('Error', error)
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  

}
