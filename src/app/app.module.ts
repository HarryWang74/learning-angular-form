import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularMaterialLibrary } from './angular-material-library/angular-material-library.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoAngularMaterialComponent } from './no-angular-material/no-angular-material.component';
import { HasAngularMaterialComponent } from './has-angular-material/has-angular-material.component';



@NgModule({
  declarations: [
    AppComponent,
    NoAngularMaterialComponent,
    HasAngularMaterialComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, AngularMaterialLibrary, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
