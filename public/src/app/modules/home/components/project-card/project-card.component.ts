import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '@services/home.service';
import { Roles } from 'app/state/app.state';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  constructor(private route: Router) { }

  @Input() projectData!: Project;
  @Input() role!: string;
  roles = Roles;

  ngOnInit(): void { }

  goToProject() {
    this.route.navigate(['/project',this.projectData._id]);
  }
}
