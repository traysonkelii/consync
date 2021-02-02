import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Permissions, RootState } from './app.state';
import * as RootActions from './app.actions';

const initialState: RootState = { user: undefined };

export const rootReducer = createReducer<RootState>(
    initialState,
    on(RootActions.getUserSuccessAction, (state, action): RootState => {
        return {
            ...state,
            user: action.user
        }
    }),
)

const getRootFeatureState = createFeatureSelector<RootState>('root');

export const getUser = createSelector(
    getRootFeatureState,
    state => state.user
);

export const getUserPermissions = createSelector(
    getRootFeatureState,
    state => state.user?.permissions
);

export const getCreateProjectPermissions = createSelector(
    getRootFeatureState,
    state => state.user?.permissions.filter(permission => permission === Permissions.createProject)
);