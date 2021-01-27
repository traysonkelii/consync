import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { getMockUser } from '@mocks/user.mock';
import { getMockProjects } from '@mocks/project.mock';
import { Observable, of } from 'rxjs';

export interface Project {
  projectId: number,
  title: string,
  inCourtItems?: number;
  averageResponseTime?: number;
  globalAverageResponseTime?: number;
  numberOfOpenItems?: number;
  itemsInGeneralContractorsCourt?: number;
  imageUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    if (environment.production) {
      return this.http.get(`${environment.baseUrl}/user`);
    }
    return of(getMockUser());
  }

  getProjects(): Observable<any> {
    if (environment.production) {
      return this.http.post(`${environment.baseUrl}/project/query`, {});
    }
    return of(getMockProjects());
  }

  createProject(projectRequest: any): Observable<Project> {
    const dataFromServer: Project = { title: projectRequest.data.name, projectId: Math.round(Math.random() * 2000) }
    return of(dataFromServer);
  }
}
