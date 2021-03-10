import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store"
import * as ItemAction from './item.action';

export interface ItemState {
    item: any;
}

const initialState: ItemState = {item: null}

export const itemReducer = createReducer<ItemState>(
    initialState,
    on(ItemAction.getItemDataSuccess, (state, action): ItemState => {
        return {
            ...state,
            item: action.item
        }
    }),
);

const getItemFeatureState = createFeatureSelector<ItemState>('item');

export const getSelectedItem = createSelector(
    getItemFeatureState,
    state => state.item
);