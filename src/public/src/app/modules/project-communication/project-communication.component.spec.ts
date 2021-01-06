import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCommunicationComponent } from './project-communication.component';

describe('ProjectCommunicationComponent', () => {
  let component: ProjectCommunicationComponent;
  let fixture: ComponentFixture<ProjectCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
