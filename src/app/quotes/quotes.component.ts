import { Component, OnInit, Input } from '@angular/core'; 
import  { Quote } from '../quote.model'
import { QuoteServiceClass }  from '../quotes.service'; 
import { Observable } from 'rxjs'; 

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

 
export class QuotesComponent implements OnInit{
 @Input() serachAuthorData: Quote; 

    allData : Quote[]; 
    allDataUnique : any[] = [];
    showAuthorData:boolean = false;
    multipleQuotes : any[] = [];
    author_data : any; 
    
    constructor(private quoteServiceClass: QuoteServiceClass){} 

    ngOnInit() { 
        this.getQuotes();
        this.uniqeAuthor(this.allData, 'id');
    }

    uniqeAuthor(allDataObj, prop){   
        let obj = {};
        for (let i = 0, len = allDataObj.length; i < len; i++){
          
          if(!obj[allDataObj[i][prop]]){
              obj[allDataObj[i][prop]] = allDataObj[i];
            }
        }

        for ( let key in obj ){   
          this.allDataUnique.push(obj[key]);
        } 
        return this.allDataUnique;
    } 
      
    getQuotes(): void { 
        this.quoteServiceClass.getQuotes()
        .subscribe(allData => this.allData = allData);
    }
    
    onChange(author){ 
        if(author == 'all'){
          this.getQuotes();
          this.showAuthorData = false;
        }else{
          this.author_data = author;
          this.quoteServiceClass.getAuthorData(author.id)
          .subscribe(serachAuthorData => this.multipleQuotes = serachAuthorData);
          
          this.showAuthorData = true;
        } 
    } 
}
