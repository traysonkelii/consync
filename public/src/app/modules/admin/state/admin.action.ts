import { createAction, props } from "@ngrx/store";
import { Project } from "@services/home.service";

export const loadAdminProjects = createAction('[Admin] load projects');
export const loadAdminProjectsSuccess = createAction('[Admin] load projects success', props<{ projects: Project[] }>());
export const loadAdminProjectsFailure = createAction('[Admin] load project failure', props<{ error: any }>());
export const createProject = createAction('[Admin] create project', props<{ projectRequest: { title: string, description: string } }>());
export const createProjectSuccess = createAction('[Admin] create Project success', props<{ project: Project }>());
export const createProjectFailure = createAction('[Admin] create Project failure', props<{ error: any }>());