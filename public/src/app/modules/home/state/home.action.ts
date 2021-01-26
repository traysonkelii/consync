import { createAction, props } from '@ngrx/store';
import { Project } from '@services/home.service';

export const toggleNavbar = createAction('[Home] toggle header');
export const updatePart = createAction('[Home] update part', props<{ part: string }>());
export const loadProjects = createAction('[Home] load projects');
export const loadProjectsSuccess = createAction('[Home] load projects success', props<{ projects: any }>());
export const loadProjectsFailure = createAction('[Home] load projects failure', props<{ error: any }>());
export const createProject = createAction('[Home] create project', props<{ data: any }>());
export const createProjectSuccess = createAction('[Home] create project success', props<{ project: Project }>());
export const createProjectError = createAction('[Home] create project failure', props<{ error: any }>());
export const getUser = createAction('[Home] get User');
export const getUserSuccess = createAction('[Home] get User Success', props<{user: any}>());