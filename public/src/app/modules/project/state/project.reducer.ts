import { state } from "@angular/animations";
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store"
import { ItemService } from "@services/item.service";
import * as ProjectAction from './project.action';

export interface ProjectState {
    project: any;
    itemDetail: any;
    messages: any;
}

const initialState: ProjectState = { project: null, itemDetail: null, messages: null }

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
    }),
    on(ProjectAction.getItemDetailSuccess, (state, action): ProjectState => {
        return {
            ...state,
            itemDetail: action
        }
    }),
    on(ProjectAction.backButton, (state): ProjectState => {
        return {
            ...state,
            itemDetail: null
        }
    }),
    on(ProjectAction.getMessageForChannelSuccess, (state, action): ProjectState => {
        return {
            ...state,
            messages: action
        }
    }),
    on(ProjectAction.createNewMessageSuccess, (state, action): ProjectState => {
        state.messages.messages.push(action);
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

export const getItemDetail = createSelector(
    getProjectFeatureState,
    state => state.itemDetail
);

export const getMainChannel = createSelector(
    getProjectFeatureState,
    state => state.itemDetail.channels.filter((x: { type: string; }) => x.type === 'main')
)

export const getMessages = createSelector(
    getProjectFeatureState,
    state => state.messages
) 