import { createAction, props } from "@ngrx/store";

export const getProjectData = createAction('[Project] get project called', props<{projectId: string}>());
export const getProjectDataSuccess = createAction('[Project] get project data success', props<{project: any}>());
export const getProjectsDataFailure = createAction('[Project] get project data failure', props<{ error: any }>());
export const createNewItem = createAction('[Project] create new Item', props<{newItemrequest: any}>());
export const createNewItemSuccess = createAction('[Project] create new Item Success', props<{item: any}>());
export const createNewItemFailure = createAction('[Project] create new Item Failure', props<{error: any}>());