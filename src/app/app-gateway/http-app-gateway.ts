import { Injectable } from '@angular/core';
import { AppGateway } from './app-gateway';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpAppGateway implements AppGateway {
  private baseUri = 'localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  addLeadInformation(leadInfo: string): Observable<any> {
    const url = '${this.baseUri}/addLead';
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })};
    const body = {lead: leadInfo};
    return this.httpClient.post<any>(url, body, httpOptions);
  }
}
