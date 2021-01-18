import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Project } from '@services/home.service';
import * as AppState from '../../../state/app.state';
import * as HomeActions from './home.action';

/**
 * this is used for lazy loaded components
 */
export interface HomeBaseState extends AppState.State {
    home: HomeState
}

export interface HomeState {
    displayNav: boolean;
    part: string;
    projects: Project[];
    error?: any;
}

const initialState: HomeState = { displayNav: true, part: '', projects: [] };

export const homeReducer = createReducer<HomeState>(
    initialState,
    on(HomeActions.toggleNavbar, (state): HomeState => {
        return {
            ...state,
            displayNav: !state.displayNav
        }
    }),
    on(HomeActions.updatePart, (state, action): HomeState => {
        return {
            ...state,
            part: action.part
        }
    }),
    on(HomeActions.loadProjectsSuccess, (state, action): HomeState => {
        return {
            ...state,
            projects: action.projects
        }
    }),
    on(HomeActions.createProjectSuccess, (state, action): HomeState => {
        return {
            ...state,
            projects: [...state.projects, action.project]
        }   
    })
)

const getHomeFeatureState = createFeatureSelector<HomeState>('home');

export const getDisplayNav = createSelector(
    getHomeFeatureState,
    state => state.displayNav
);

export const getProjects = createSelector(
    getHomeFeatureState,
    state => state.projects
);