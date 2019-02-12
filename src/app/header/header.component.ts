import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../shared/services/data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName;
  constructor(public auth: AuthService, private dataService: DataService, private route: Router) { }

  ngOnInit() { }

  ngDoCheck() {
    console.log('ngAfterContentInit');
    this.dataService.getDetails().subscribe(
      (response) => {
        if (response) {
          this.userName = response;
        } else {
          this.userName = 'Papa';
        }
      },
      (error) => {
        console.log('error', error);
      },
    )
  };


  logout() { 
    this.auth.logout();
    this.route.navigate(['login']); 
  };

}
