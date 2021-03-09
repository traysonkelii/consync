import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ItemService } from "@services/item.service";
import { ProjectService } from "@services/project.service";
import { map, mergeMap } from "rxjs/operators";
import * as ProjectActions from './project.action';

@Injectable()
export class ProjectEffects {
    constructor(
        private actions$: Actions,
        private projectService: ProjectService,
        private itemService: ItemService,
    ) { }

    loadProject$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProjectActions.getProjectData),
            mergeMap((data) => this.projectService.getProject(data.projectId).pipe(
                map((project: any) => ProjectActions.getProjectDataSuccess({ project }))
            ))
        );
    });

    createItem$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProjectActions.createNewItem),
            mergeMap((newItemRequest) => this.itemService.createItem(newItemRequest).pipe(
                map((item: any) => ProjectActions.createNewItemSuccess(item)),
            ))
        );
    });
}