import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as LoginActions from './login.action';

/**
 * this is used for lazy loaded components
 */
export interface LoginBaseState {
    login: LoginState
}

export interface LoginState {

}

const initialState: LoginState = { };

export const loginReducer = createReducer<LoginState>(
    initialState,
    on(LoginActions.loginSuccess, (state): LoginState => {
        return {
        }
    }),
    on(LoginActions.loginFailure, (state, action): LoginState => {
        return {
        }
    }),
)
