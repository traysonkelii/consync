import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ChannelService } from "@services/channel.service";
import { ProjectService } from "@services/project.service";
import { map, mergeMap } from "rxjs/operators";
import * as ProjectActions from './project.action';

@Injectable()
export class ProjectEffects {
    constructor(
        private actions$: Actions,
        private projectService: ProjectService,
        private channelService: ChannelService,
    ) { }

    loadProject$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProjectActions.getProjectData),
            mergeMap((data) => this.projectService.getProject(data.projectId).pipe(
                map((project: any) => ProjectActions.getProjectDataSuccess({ project }))
            ))
        );
    });

    createChannel$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProjectActions.createNewChannel),
            mergeMap((newChannelRequest) => this.channelService.createChannel(newChannelRequest).pipe(
                map((channel: any) => ProjectActions.createNewChannelSuccess(channel)),
            ))
        );
    });
}