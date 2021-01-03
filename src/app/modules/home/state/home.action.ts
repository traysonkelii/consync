import { createAction, props } from '@ngrx/store';

export const toggleNavbar = createAction('[Home] toggle header');
export const updatePart = createAction('[Home] update part', props<{ part: string }>());
export const loadProjects = createAction('[Home] load projects');
export const loadProjectsSuccess = createAction('[Home] load projects success', props<{ projects: any }>());
export const loadProjectsFailure = createAction('[Home] load projects failure', props<{ error: any }>());