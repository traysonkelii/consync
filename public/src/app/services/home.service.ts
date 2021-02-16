import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { getMockUser } from '@mocks/user.mock';
import { getMockProjects } from '@mocks/project.mock';
import { Observable, of } from 'rxjs';
import { ProjectDialogData } from '@modules/header/components/new-project-modal/new-project-modal.component';

export interface Project {
  _id?: string,
  title: string,
  description?: string,
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

  createProject({ title, description }: ProjectDialogData): Observable<Project> {
    const data: Project = { title, description }
    if (environment.production) {
      return this.http.post<Project>(`${environment.baseUrl}/project`, data);
    }
    return of(data);
  }
}
