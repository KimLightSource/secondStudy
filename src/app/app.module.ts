import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import {MyServiceService} from "./my-service.service";



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
    MyServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
