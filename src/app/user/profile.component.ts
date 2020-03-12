// Reactive Form, for a template-based for see the Login Method
//  - Lends itself to unit testing. 
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    .btn { border-radius: .55rem; margin-right: 10px}
    .form-control { border-radius: .55rem}
    em { float:right; color:#E05C65; padding-left: 10px }
    .error input { background-color:#E3C3C5 }
    .error ::-webkit-input-placeholder { color: #999 }
    .error ::-moz-placeholder { color: #999 }
    .error :-moz-placeholder { color: #999 }
    .error ::ms-input-placeholder { color: #999 }
  `]
})

// Noticed I implemented OnInit here, I could have just created the ngOnInit() function
//    doing it this way will allow you to take advantage of some typescript help 
export class ProfileComponent implements OnInit {
  profileForm: FormGroup; 
  firstName:FormControl;
  lastName:FormControl;
  emailAddress:FormControl;
  phoneNumber:FormControl;
  address:FormControl;
  city:FormControl;
  state:FormControl;
  zipCode:FormControl;


  constructor(private authService:AuthService, private router:Router)  {

  }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, Validators.required);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.emailAddress = new FormControl(this.authService.currentUser.emailAddress, Validators.required);
    this.phoneNumber = new FormControl(this.authService.currentUser.phoneNumber, Validators.required);
    this.address = new FormControl(this.authService.currentUser.address, Validators.required);
    this.city = new FormControl(this.authService.currentUser.city, Validators.required);
    this.state = new FormControl(this.authService.currentUser.state, Validators.required);
    this.zipCode = new FormControl(this.authService.currentUser.zipCode, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      emailAddress: this.emailAddress,
      address: this.address,
      city: this.city,
      state: this.state,
      zipCode: this.zipCode
    }); 
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName, formValues.emailAddress, formValues.phoneNumber,
          formValues.address, formValues.city, formValues.state, formValues.zipCode); 
      this.router.navigate(['branches']); 
    } else {
      // TODO: Display a model that you have not filled out the form correctly. 
    }    
  }

  handleCancel() {
    this.router.navigate(['branches']); 
  }

  validateRequired(control)  {
    return control.valid || control.untouched;
  }

 
}