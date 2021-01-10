import { Injectable } from '@angular/core';
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

const fakeData: Project[] = [
  {
    projectId: 1,
    title: 'Project One',
    inCourtItems: 4,
    averageResponseTime: 2.4,
    globalAverageResponseTime: 3.6,
    numberOfOpenItems: 12,
    itemsInGeneralContractorsCourt: 5,
    imageUrl: "https://picsum.photos/id/232/200/300"
  },
  {
    projectId: 1,
    title: 'Project Two',
    inCourtItems: 4,
    averageResponseTime: 2.4,
    globalAverageResponseTime: 3.6,
    numberOfOpenItems: 12,
    itemsInGeneralContractorsCourt: 5,
    imageUrl: "https://picsum.photos/id/236/200/300"
  },
  {
    projectId: 1,
    title: 'Project Three',
    inCourtItems: 4,
    averageResponseTime: 2.4,
    globalAverageResponseTime: 3.6,
    numberOfOpenItems: 12,
    itemsInGeneralContractorsCourt: 5,
    imageUrl: "https://picsum.photos/id/235/200/300"
  },
  {
    projectId: 1,
    title: 'Project Four',
    inCourtItems: 4,
    averageResponseTime: 2.4,
    globalAverageResponseTime: 3.6,
    numberOfOpenItems: 12,
    itemsInGeneralContractorsCourt: 5,
    imageUrl: "https://picsum.photos/id/234/200/300"
  },
  {
    projectId: 1,
    title: 'Project Five',
    inCourtItems: 4,
    averageResponseTime: 2.4,
    globalAverageResponseTime: 3.6,
    numberOfOpenItems: 12,
    itemsInGeneralContractorsCourt: 5,
    imageUrl: "https://picsum.photos/id/233/200/300"
  }
]

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(fakeData)
  }

  createProject(projectRequest: any): Observable<Project> {
    
    const dataFromServer: Project = { title: projectRequest.data.name, projectId: Math.round(Math.random() * 2000) }
    return of(dataFromServer);
  }
}
