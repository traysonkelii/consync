import { createAction, props } from "@ngrx/store";

export const getItemData = createAction('[Item] get item called', props<{itemId: string}>());
export const getItemDataSuccess = createAction('[Item] get item success', props<{item: any}>());
export const getItemsDataFailure = createAction('[Item] get item failure', props<{ error: any }>());
