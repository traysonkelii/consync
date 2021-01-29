import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectCard } from './project-card.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  constructor(private route: Router) { }

  @Input() projectData!: any;

  ngOnInit(): void {
    console.log(this.projectData);
  }

  test(){
    this.route.navigate(['/personal-communication'])
  }

}
