import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8096/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private getAllAdvertisement  ;
  private getAllAdvertisementsByArea;

  constructor(private http: HttpClient) {}
  // private extractData(res: Response) {
  //   let body = res;
  //   console.log(body);
  //   return body || { };
  // }
  // getProducts(): Observable<any> {
  //   return this.http.get(endpoint + 'advertisements').pipe(
  //     map(this.extractData));
  // }
getAdvertisements() {
  this.http.get(endpoint + 'advertisements').subscribe(res => {
    this.getAllAdvertisement = res;
    console.log(this.getAllAdvertisement);
  });
}

    getByArea(area: String) {
      this.http.get(endpoint + 'advertisement/area/'+area).subscribe(res => {
        this.getAllAdvertisementsByArea = res;
        console.log(this.getAllAdvertisementsByArea);
  });
}}