import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import { myData } from "./MyType";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    ReactiveFormsModule //반응형 폼 사용
  ],
  providers: [
    {provide:"sending_name", useValue:myData}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
