import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../shared/services/login.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myLoginFrom: FormGroup;
  submitted = false; 

  constructor(private fb: FormBuilder, private loginService:LoginService, private route: Router) { }

  ngOnInit() { 

      this.myLoginFrom = this.fb.group({ 
        username : ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(3)]], 
      });
      
  }

  get f() { return this.myLoginFrom.controls; }

  login(){
    this.submitted = true; 

    if (this.myLoginFrom.invalid) {
           console.log('Invalid');
          return;
      } else {
        this.loginService.login(this.myLoginFrom.value)
        .subscribe(
          (response) =>{ 
            
            if(response && response.token && response.data[0] && response.data[0].username && response.data[0].password){
              console.log(response);
              const userToken = response.token;
              localStorage.setItem('token', userToken);
              this.route.navigate(['/users'])
            }
            
          },
          (error) =>{
            console.log('error', error); 
          } 
        )
        
    }
  

}
