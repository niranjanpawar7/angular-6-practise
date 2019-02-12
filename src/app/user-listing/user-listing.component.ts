import { Component, OnInit, ViewChild } from '@angular/core';
import { listingService } from '../shared/services/userlist.service';``
import { ISubscription } from "rxjs/Subscription";
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material';


@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})

export class UserListingComponent implements OnInit {
  date = new Date();
  subscription: ISubscription;
  dataSource;

  // column Name display in table
  columnsToDisplay = ['id', 'username', 'email', 'contact',   'password', 'confpassword'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private ListingService: listingService) { }

  ngOnInit() {
    debugger
     this.ListingService.getUserData().subscribe(
       (response) =>{ 
        console.log('response', response)
        this.dataSource = response;
        // pass data to table
        this.dataSource = new MatTableDataSource(this.dataSource);
        // Sorting data of table
        this.dataSource.sort = this.sort;
        // Paginartion Of data
        this.dataSource.paginator = this.paginator;
        this.paginator._pageIndex = 0;
       },
       (error) =>{
          console.log('error', error)
       }
     )
  }

}
