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

}
