import { createAction, props } from "@ngrx/store";

export const getProjectData = createAction('[Project] get project called', props<{ projectId: string }>());
export const getProjectDataSuccess = createAction('[Project] get project data success', props<{ project: any }>());
export const getProjectsDataFailure = createAction('[Project] get project data failed', props<{ error: any }>());
export const createNewItem = createAction('[Project] create new Item', props<{ newItemrequest: any }>());
export const createNewItemSuccess = createAction('[Project] create new Item success', props<{ item: any }>());
export const createNewItemFailure = createAction('[Project] create new Item failed', props<{ error: any }>());
export const getItemDetail = createAction('[Project] get item detail called', props<{ itemId: string }>());
export const getItemDetailSuccess = createAction('[Project] get item detail success', props<{ itemDetail: any }>());
export const getItemDetailFailure = createAction('[Project] get item detail failed', props<{ error: any }>());
export const backButton = createAction('[Project] back button pressed');
export const getMessageForChannel = createAction('[Project] get message for channel called', props<{ channelId: string}>());
export const getMessageForChannelSuccess = createAction('[Project] message for channel recived', props<{ messages: any}>());
export const getMessageForChannelFailure = createAction('[Project] message for channel failed', props<{error: any}>());
export const createNewMessage = createAction('[Item] create new message called', props<{messageRequest:any}>());
export const createNewMessageSuccess = createAction('[Item] create new message success', props<{message:any}>());
export const createNewMessageFailure = createAction('[Item] create new message failed', props<{error:any}>());