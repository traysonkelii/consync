import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

import { Observable } from 'rxjs';
import { Project } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAdminProjects(): Observable<any> {
    return this.http.post(`${environment.baseUrl}/project/query`, {});
  }

  createProject({ title, description }: any): Observable<Project> {
    const data: Project = { title, description }
    return this.http.post<Project>(`${environment.baseUrl}/project`, data);
  }
}
