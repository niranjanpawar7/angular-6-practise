import { Component, OnInit, ViewChild } from '@angular/core';
import { QuoteServiceClass } from '../shared/services/quotes.service';
import { ISubscription } from "rxjs/Subscription";
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material';
import { QuotesModel } from '../model/QuotesModel';
import { from } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  QuotesModel : QuotesModel[];
  date = new Date();
  subscription: ISubscription;
  dataSource

  // column Name display in table
  columnsToDisplay = ['Name', 'profession', 'born', 'died', 'topics', 'shareCount'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private quoteService: QuoteServiceClass) { }


  ngOnInit() {
    this.getUserData();
  };

  // Fetch All user from mock json
  getUserData() {

    this.subscription = this.quoteService.getQuotes()
      .subscribe(
        (response: QuotesModel[]) => {
          this.dataSource = response;
          // pass data to table
          this.dataSource = new MatTableDataSource<QuotesModel>(this.dataSource);
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
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  // Memory Leakge removed
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


