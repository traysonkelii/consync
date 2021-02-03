import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { getMockProject } from '@mocks/single-project.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProject(projectId: string): Observable<any> {
    if (environment.production) {
      return this.http.get(`${environment.baseUrl}/project/${projectId}`, {})
    }
    return of(getMockProject());
  }
}
