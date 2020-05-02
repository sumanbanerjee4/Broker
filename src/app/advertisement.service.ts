import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  
  private baseUrl = 'http://localhost:8095/api/advertisements';
 
  constructor(private http: HttpClient) { }
 
  getAdvertisement(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  createAdvertisement(advertisement: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, advertisement);
  }
 
  updateAdvertisement(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deleteAdvertisement(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
 
  getAdvertisementList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
 
  getAdvertisementByArea(area: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/area/${area}`);
  }
 
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
