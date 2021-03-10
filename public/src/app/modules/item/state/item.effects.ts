import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ItemService } from "@services/item.service";
import { map, mergeMap } from "rxjs/operators";
import * as ItemActions from './item.action';

@Injectable()
export class ItemEffects {
    constructor(
        private actions$: Actions,
        private itemService: ItemService,
    ) { }

    loadItem$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ItemActions.getItemData),
            mergeMap((data) => this.itemService.getItem(data.itemId).pipe(
                map((item: any) => ItemActions.getItemDataSuccess({ item }))
            ))
        );
    });
}