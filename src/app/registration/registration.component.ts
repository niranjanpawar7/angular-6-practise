import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../shared/services/registration.service';
import { Router } from "@angular/router"
import { MatDialog, MatDialogConfig } from "@angular/material";
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  myForm: FormGroup;
  submitted = false;
  loading;

  constructor(public dialog: MatDialog, private fb: FormBuilder, private registrationService: RegistrationService, private route: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      contact: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confpassword: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get f() { return this.myForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.myForm.invalid) {
      console.log('Invalid');
      return;
    } else {
      const formData = this.myForm.value;
      if (formData.password === formData.confpassword) {
        this.submitted = true;
        this.registrationService.saveUserData(formData)
          .subscribe(
            (response) => {
              console.log('response', response);
              this.route.navigate(['login']);
            },
            (error) => {
              console.log('error', error);
            },
          )

      } else {
        console.log('Wrong password');
        this.submitted = false;
      }
    }
  }
}
