import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  getMessageByChannelId(messageRequest: any): Observable<any> {
    return this.http.get(`${environment.baseUrl}/channel/${messageRequest._id}`);
  }

  createMessage(messageRequest: any): Observable<any> {
    const body = messageRequest.messageRequest;
    return this.http.post(`${environment.baseUrl}/message/`, body);
  }
}
