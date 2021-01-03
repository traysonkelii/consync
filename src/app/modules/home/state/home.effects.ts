import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HomeService } from 'src/app/services/home.service';
import * as HomeActions from './home.action';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class HomeEffects {
    constructor(private actions$: Actions,
        private homeService: HomeService) { }
    
        loadProjects$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(HomeActions.loadProjects),
                mergeMap(() => this.homeService.getProjects().pipe(
                    map(projects => HomeActions.loadProjectsSuccess({projects})) 
                ))
            )
        });
    
}