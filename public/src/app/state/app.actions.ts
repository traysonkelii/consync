import { createAction, props } from '@ngrx/store';

export const getUserAction = createAction('[Root] get User');
export const getUserSuccessAction = createAction('[Root] get User Success', props<{user: any}>());