import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

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

  constructor(private http:HttpClient) { }

  

  getProjects(): Observable<any> {
    return this.http.post(`${environment.baseUrl}/project/query`,{});
  }

  createProject(projectRequest: any): Observable<Project> {
    
    const dataFromServer: Project = { title: projectRequest.data.name, projectId: Math.round(Math.random() * 2000) }
    return of(dataFromServer);
  }
}
