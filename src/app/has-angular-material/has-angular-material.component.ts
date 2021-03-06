import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatePassword } from '../validator/password.validator';

@Component({
  selector: 'app-has-angular-material',
  templateUrl: './has-angular-material.component.html',
  styleUrls: ['./has-angular-material.component.css']
})
export class HasAngularMaterialComponent implements OnInit {
  complexForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.complexForm = fb.group({
      'firstName' : [null, Validators.required],
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      'gender' : ['', Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      // validate formcontrol by custom validator
      'password': [null, Validators.compose([Validators.required, ValidatePassword])],
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
