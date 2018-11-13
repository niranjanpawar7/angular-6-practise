import { Component, OnInit, ViewChild } from '@angular/core';
import { QuoteServiceClass } from '../shared/services/quotes.service';
import { ISubscription } from "rxjs/Subscription";
import { MatPaginator, MatTableDataSource } from '@angular/material'; 
import { MatSort } from '@angular/material';
 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  date = new Date();
  subscription: ISubscription;
  dataSource

  // column Name display in table
  columnsToDisplay = ['Name', 'profession', 'born', 'died','topics', 'shareCount'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private quoteService: QuoteServiceClass) { }
 

  ngOnInit() { 
    this.getUserData(); 
  }


  // Fetch All user from mock json
  getUserData() {
    
    this.subscription = this.quoteService.getQuotes()
    .subscribe(
      (response) => {  
        this.dataSource = response;
        // pass data to table
        this.dataSource = new MatTableDataSource(this.dataSource);
        // Sorting data of table
        this.dataSource.sort = this.sort;
        // Paginartion Of data
        this.dataSource.paginator = this.paginator; 
    },
        (error) => {
            console.log(error);
        }
    );
  }


  // Search Filter
  applyFilter(filterValue: string) {
    console.log(this.dataSource);
    debugger
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  // Memory Leakge removed
  ngOnDestroy() {
     this.subscription.unsubscribe(); 
  }
}


