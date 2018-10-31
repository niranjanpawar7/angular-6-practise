import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService, private route: Router) { }

  ngOnInit() {
  }

  logout(){
    debugger;
    this.auth.logout();
    this.route.navigate(['login']);

  }

}
