import { Component, OnInit, ViewChild } from '@angular/core';
import { QuoteServiceClass } from '../quotes.service';
import {ISubscription} from "rxjs/Subscription";
import {MatPaginator, MatTableDataSource} from '@angular/material'; 
import {MatSort} from '@angular/material';
 
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  subscription: ISubscription;
  dataSource;
    

  columnsToDisplay = ['Name', 'profession', 'born', 'died','topics', 'shareCount'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private quoteService: QuoteServiceClass) { }

  
   

  ngOnInit() {
     
    this.getUserData();
    
  }

  getUserData() {
    
    this.subscription = this.quoteService.getQuotes()
    .subscribe(
      (response) => { 
        this.dataSource = response;
        this.dataSource = new MatTableDataSource(this.dataSource);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator; 
    },
        (error) => {
            console.log(error);
        }
    );
  }

  ngOnDestroy() {
     this.subscription.unsubscribe(); 
  }
}


