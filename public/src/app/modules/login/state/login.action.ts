import { createAction, props } from '@ngrx/store';

export const login = createAction('[Login] login successful', props<{ email: string, password: string}>());
export const loginSuccess = createAction('[Login] login projects success', props<{ projects: any }>());
export const loginFailure = createAction('[Login] login projects failure', props<{ error: any }>());