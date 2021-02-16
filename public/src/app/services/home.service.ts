import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable, of } from 'rxjs';
import { ProjectDialogData } from '@modules/admin/component/new-project-modal/new-project-modal.component';
import { getMockProjects } from '@mocks/project.mock';

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
    return this.http.get(`${environment.baseUrl}/user`);
  }

  getProjects(): Observable<any> {
    if(!environment.production) return of(getMockProjects());
    return this.http.post(`${environment.baseUrl}/project/query`, {});
  }

  createProject({ title, description }: ProjectDialogData): Observable<Project> {
    const data: Project = { title, description }
    return this.http.post<Project>(`${environment.baseUrl}/project`, data);
  }
}
