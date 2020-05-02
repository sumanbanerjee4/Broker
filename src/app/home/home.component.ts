import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dataService: RestService) { } 
  myFunct(){
  this.dataService.getAdvertisements();
  }
  searchByArea(area: String){
  this.dataService.getByArea(area);
   
 }
  linkList:boolean=false;
  toogleLinks(){
    this.linkList=true
  }
  close(){
    this.linkList=false;
  }

  

  ngOnInit() {
  }

}
