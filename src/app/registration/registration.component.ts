import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  myForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confPassword: ['', [Validators.required, Validators.minLength(6)]]
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
          const formData = this.myForm.value ;
          if (formData.password === formData.confPassword) {
            console.log('Right', this.myForm.value);
            this.submitted = true;
          } else {
            console.log('Wrong password');
            this.submitted = false;
          }
        }
  }
}
