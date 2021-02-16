import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { getMockUser } from '@mocks/user.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    if (environment.production) {
      return this.http.get(`${environment.baseUrl}/user`);
    }
    return of(getMockUser());
  }
}
