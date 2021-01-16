import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoginService } from 'src/app/services/login.service';
import * as LoginActions from './login.action';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class LoginEffects {
    constructor(private actions$: Actions,
        private loginService: LoginService) { }

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(LoginActions.login),
            mergeMap(() => this.loginService.login().pipe(
                map(projects => LoginActions.loginSuccess({ projects }))
            ))
        );
    });
}