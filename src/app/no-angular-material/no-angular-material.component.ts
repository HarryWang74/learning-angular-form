import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-no-angular-material',
  templateUrl: './no-angular-material.component.html',
  styleUrls: ['./no-angular-material.component.css']
})
export class NoAngularMaterialComponent implements OnInit {
  complexForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.complexForm = fb.group({
      'firstName' : [null, Validators.required],
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      'gender' : [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
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
