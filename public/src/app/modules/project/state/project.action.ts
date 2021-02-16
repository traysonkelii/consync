import { createAction, props } from "@ngrx/store";

export const getProjectData = createAction('[Project] get project called', props<{projectId: string}>());
export const getProjectDataSuccess = createAction('[Project] get project data success', props<{project: any}>());
export const getProjectsDataFailure = createAction('[Project] get project data failure', props<{ error: any }>());
export const createNewChannel = createAction('[Project] create new Channel', props<{newChannelrequest: any}>());
export const createNewChannelSuccess = createAction('[Project] create new Channel', props<{channel: any}>());
export const createNewChannelFailure = createAction('[Project] create new Channel', props<{error: any}>());