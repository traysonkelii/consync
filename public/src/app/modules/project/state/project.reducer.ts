import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store"
import * as ProjectAction from './project.action';

export interface ProjectState {
    project: any;
}

const initialState: ProjectState = {project: null}

export const projectReducer = createReducer<ProjectState>(
    initialState,
    on(ProjectAction.getProjectDataSuccess, (state, action): ProjectState => {
        return {
            ...state,
            project: action.project
        }
    }),
    on(ProjectAction.createNewChannelSuccess, (state, action): ProjectState => {
        state.project.channels.push(action);
        return {
            ...state,
        }
    })
);

const getProjectFeatureState = createFeatureSelector<ProjectState>('project');

export const getSelectedProject = createSelector(
    getProjectFeatureState,
    state => state.project
);