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
        return {
            ...state,
            project: {
                ...state.project,
                items: [...state.project.items, action.item]
            }
        }
    })
);

const getProjectFeatureState = createFeatureSelector<ProjectState>('project');

export const getSelectedProject = createSelector(
    getProjectFeatureState,
    state => state.project
);