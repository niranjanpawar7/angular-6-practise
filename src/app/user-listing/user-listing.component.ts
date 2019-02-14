import { Component, OnInit, ViewChild } from '@angular/core';
import { listingService } from '../shared/services/userlist.service'; ``
import { ISubscription } from "rxjs/Subscription";
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { UserModel } from '../model/UsersModel';


@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})

export class UserListingComponent implements OnInit {
  UserModel: UserModel[] = [];
  date = new Date();
  subscription: ISubscription;
  dataSource;

  // column Name display in table
  columnsToDisplay = ['id', 'username', 'email', 'contact', 'password', 'confpassword', 'edit'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(public dialog: MatDialog, private ListingService: listingService) {}

  ngOnInit() {  
    this.UserListing() 
  };

  UserListing(){
    this.ListingService.getUserData().subscribe(
      (response: Array<UserModel>) => {  
        this.dataSource = response;
        // pass data to table
        this.dataSource = new MatTableDataSource<UserModel>(this.dataSource); 
        this.dataSource.sort = this.sort; 
        this.dataSource.paginator = this.paginator;
        this.paginator._pageIndex = 0;
      },
      (error) => {
        console.log('error', error)
      }
    )
  };
  openModal(userData:any) {  
    console.log('Open', userData);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners',
      data : userData
    };
    const dialogRef = this.dialog.open(MyDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => { 
      console.log(' Dialog was closed');
      console.log('Closed', userData);
    });
  }

}
