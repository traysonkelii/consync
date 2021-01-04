import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Project{
  projectId: number,
  title: string
}

const fakeData: Project[] = [
  {
    projectId: 1,
    title: 'Project One'
  },
  {
    projectId: 2,
    title: 'Bob Builders'
  },
  {
    projectId: 3,
    title: 'Layton Community College'
  },
  {
    projectId: 4,
    title: 'Salt Lake Community College'
  },
  {
    projectId: 5,
    title: 'Chevron Gas Station'
  }
]

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }
  
  getProjects(): Observable<Project[]>{
    return of(fakeData)
  }

  createProject(projectRequest: any): Observable<Project> {
    const dataFromServer: Project = { title: projectRequest.data.name, projectId: Math.round(Math.random() * 2000) }
    return of(dataFromServer);
  }
}
