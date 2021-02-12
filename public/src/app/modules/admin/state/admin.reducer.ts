import { createReducer, on } from "@ngrx/store";
import { Project } from "@services/home.service";
import * as AdminActions from './admin.action';

export interface AdminState {
    projects?: Project[];
}

const initialState: AdminState = { projects: undefined };

export const adminReducer = createReducer<AdminState>(
    initialState,
    on(AdminActions.loadAdminProjectsSuccess, (state): AdminState => {
        return {
            ...state,
            projects: state.projects
        }
    })
)