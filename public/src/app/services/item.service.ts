import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  createItem(newItemRequest: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/item/`, newItemRequest);
  }

  getItem(itemId: any): Observable<any> {
    return this.http.get(`${environment.baseUrl}/item/${itemId}`);
  }
}
