import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../shared/services/login.service';
import { Router } from "@angular/router"
import { AuthService } from '../auth.service';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myLoginFrom: FormGroup;
  submitted = false;
  loggMessage;
  userName;
  loading;

  constructor(private fb: FormBuilder, private dataService: DataService, private loginService: LoginService, private route: Router, private authService: AuthService) { }

  ngOnInit() {

    this.myLoginFrom = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });

  }

  get f() { return this.myLoginFrom.controls; }

  login() {
    this.submitted = true;

    if (this.myLoginFrom.invalid) {
      return;
    }
    else {
      this.loginService.login(this.myLoginFrom.value)
        .subscribe(
          (response) => {
            if (response && response.token && response.data[0] && response.data[0].username && response.data[0].password) {
              const userToken = response.token;
              this.userName = response.data[0].username
              //State Data Service Of User 
              this.dataService.sendDetails(this.userName);

              this.authService.sendToken(response['token']);
              this.route.navigate(['users']);
            } else if (!response.token) {
              console.log('wrong username or password')
              this.loggMessage = 'wrong username or password';
            }

          },
          (error) => {
            console.log('error', error);
          }
        )

    }
  }
}
