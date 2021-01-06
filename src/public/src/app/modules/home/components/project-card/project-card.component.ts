import { Component, Input, OnInit } from '@angular/core';
import { ProjectCard } from './project-card.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  constructor() { }

  @Input() projectData!: ProjectCard;
  @Input() auth: any;

  ngOnInit(): void {
  }

}
