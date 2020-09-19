import { Injectable } from '@angular/core';
import { AppGateway } from './app-gateway';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpAppGateway implements AppGateway {
  private baseUri = `http://localhost:8080/exambuddy`;

  constructor(private httpClient: HttpClient) {}

  addLeadInformation(leadInfo: object): Observable<any> {
    const url = 'exambuddy/user/v1/save';
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })};
    console.log('Data : ', leadInfo);
    /*const body = {
      type: 'Parents',
      exam: 'IITJEE',
      mobile: '8002848962',
      name: 'Nikhil',
      email_id: '',
      preferred_time_slot: '',
    };*/
    return this.httpClient.post<any>(url, leadInfo, httpOptions);
  }

  updateTimeSlot(timeSlot: object): Observable<any> {
    const url = 'exambuddy/user/v1/update';
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })};
    return this.httpClient.post<any>(url, timeSlot, httpOptions);
  }
}
