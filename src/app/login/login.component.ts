import { Component, OnInit } from '@angular/core';
//import { CustomValidators } from 'ng2-validation';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 // valForm: FormGroup;
  
  constructor() {

  //   this.valForm = fb.group({
  //     'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
  //     'password': [null, Validators.required]
  // });
   }

  ngOnInit() {
  }

}
