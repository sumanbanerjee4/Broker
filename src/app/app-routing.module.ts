import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PannelComponent } from './pannel/pannel.component';
import { AdvertisementListComponent } from './advertisement-list/advertisement-list.component';
import { AdvertisementDetailsComponent } from './advertisement-details/advertisement-details.component';
import { CreateAdvertisementComponent } from './create-advertisement/create-advertisement.component';
import { SearchAdvertisementComponent } from './search-advertisement/search-advertisement.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

 const routes: Routes = [ 
  
    {path: 'home', component:HomeComponent},
    {path:'', redirectTo:'./home', pathMatch:'full'},
    {path:'about',component:AboutComponent},
    {path:'login', component:LoginComponent},
    {path:'contact', component:ContactUsComponent},


    {path:'advertisement', component:PannelComponent,

        children: [
      {
      path:  'addlist',component:  AdvertisementListComponent,

           children:[{path:'adddetails',component:AdvertisementDetailsComponent}]
      },
     
        {
        path:  'add',component:   CreateAdvertisementComponent
        },
       
          {
          path:  'findbyarea', component:  SearchAdvertisementComponent
          }]},
    
    {path:'regform', component:RegistrationFormComponent},
    
    
    // {path:'patherror',component:PathErrorComponent},
    //{ path: '', redirectTo: 'advertisement', pathMatch: 'full' },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


