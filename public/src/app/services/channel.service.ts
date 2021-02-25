import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private http: HttpClient) { }

  createChannel(newChannelRequest: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/channel/`, newChannelRequest);
  }
}
