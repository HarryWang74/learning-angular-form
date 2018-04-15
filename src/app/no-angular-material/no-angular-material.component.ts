import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidatePassword } from '../validator/password.validator';

@Component({
  selector: 'app-no-angular-material',
  templateUrl: './no-angular-material.component.html',
  styleUrls: ['./no-angular-material.component.css']
})
export class NoAngularMaterialComponent implements OnInit {
  reg: RegExp = new RegExp('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/');
  complexForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.complexForm = fb.group({
      'firstName' : [null, Validators.required],
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      'gender' : [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      // validate formcontrol by custom regular expression
      'password': [null, ValidatePassword],
      'agree' : [false, Validators.requiredTrue]
    })
  }

  ngOnInit() {
  }

  onClick(e) {
    e.preventDefault();
    console.log(this.complexForm);
  }

  submitForm(value: any) {
    console.log(value);
  }
}
