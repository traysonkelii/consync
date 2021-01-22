import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as LoginActions from './login.action';

/**
 * this is used for lazy loaded components
 */
export interface LoginBaseState {
    login: LoginState
}

export interface LoginState {
    isLoggedIn: boolean
}

const initialState: LoginState = { isLoggedIn: false };

export const loginReducer = createReducer<LoginState>(
    initialState,
    on(LoginActions.loginSuccess, (state): LoginState => {
        return {
            ...state,
            isLoggedIn: true
        }
    }),
    on(LoginActions.loginFailure, (state, action): LoginState => {
        return {
            ...state,
            isLoggedIn: false
        }
    }),
)

const getLoginFeatureState = createFeatureSelector<LoginState>('login');

export const getLogin = createSelector(
    getLoginFeatureState,
    state => state.isLoggedIn
);