import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Roles } from 'app/state/app.state';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  constructor(private route: Router) { }

  @Input() projectData!: any;
  @Input() role!: string;
  roles = Roles;

  ngOnInit(): void { }

  test() {
    this.route.navigate(['/personal-communication'])
  }
}
