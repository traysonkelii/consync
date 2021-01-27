import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '@services/user.service';
import * as RootActions from './app.actions';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class RootEffects {
    constructor(private actions$: Actions,
        private userService: UserService) { }

    getUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(RootActions.getUserAction),
            mergeMap((data) => {
                return this.userService.getUser().pipe(
                    map(user => RootActions.getUserSuccessAction({ user }))
                )
            })
        );
    });
}