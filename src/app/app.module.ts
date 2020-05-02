import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 

import {HttpClient,HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PannelComponent } from 'src/app/pannel/pannel.component';
import { AdvertisementService } from './advertisement.service';
import { AdvertisementListComponent } from 'src/app/advertisement-list/advertisement-list.component';
import { AdvertisementDetailsComponent } from './advertisement-details/advertisement-details.component';
import { CreateAdvertisementComponent } from 'src/app/create-advertisement/create-advertisement.component';
import { SearchAdvertisementComponent } from './search-advertisement/search-advertisement.component';
import { LoginComponent } from './login/login.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
                  AppComponent,
                  PannelComponent,
                  AdvertisementListComponent,
                  AdvertisementDetailsComponent,
                  CreateAdvertisementComponent,
                  SearchAdvertisementComponent,
                  LoginComponent,
                  RegistrationFormComponent,
                  HomeComponent,
                  AboutComponent,
                  ContactUsComponent
                 ],
    
  imports: [
                  BrowserModule,
                  FormsModule,
                  HttpClientModule,
                  AppRoutingModule,

   
  ],
  

providers: [
              HttpClient,
              AdvertisementService,
              AdvertisementListComponent,
              AdvertisementDetailsComponent
],



  bootstrap: [AppComponent]
})
export class AppModule { }
