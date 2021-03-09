import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store"
import { ItemService } from "@services/item.service";
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
    on(ProjectAction.createNewItemSuccess, (state, action): ProjectState => {
        // state.project.items.push(action);
        return {
            ...state,
            project: {
                items: state.project.items.push(action)
            }
        }
    })
);

const getProjectFeatureState = createFeatureSelector<ProjectState>('project');

export const getSelectedProject = createSelector(
    getProjectFeatureState,
    state => state.project
);