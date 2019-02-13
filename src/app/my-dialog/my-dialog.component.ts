import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { UpdateUserService } from '../shared/services/update-user.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {
  
  myForm : FormGroup;
  modalTitle;
  formData;
  submitted = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private update : UpdateUserService, private route: Router) {
        this.modalTitle = data.title;
        this.formData = data.data;  
    }

  ngOnInit() { 
     
    this.myForm = this.fb.group({
      id : [this.formData.id, Validators.required],
      username : [this.formData.username, Validators.required],
      contact : [this.formData.contact, Validators.required],
      email: [this.formData.email, [Validators.required, Validators.email]],
      password: [this.formData.password, [Validators.required, Validators.minLength(3)]],
      confpassword: [this.formData.confpassword, [Validators.required, Validators.minLength(3)]]
    }); 
    let UserData = this.data.data
    console.log('this.formData', UserData)
  };

  get f() { return this.myForm.controls; }

  onSubmit() {
    this.submitted = true;

        // stop here if form is invalid
        if (this.myForm.invalid) {
            console.log('Invalid');
            return;
          } else {
            debugger
          const formData = this.myForm.value ;
          if (formData.password === formData.confpassword) { 
            this.submitted = true;
            this.update.updateUserData(formData)
            .subscribe(
              (response) => {
                console.log('response', response);
               alert('success updates')
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
