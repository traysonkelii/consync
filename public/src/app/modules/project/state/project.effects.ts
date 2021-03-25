import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ItemService } from "@services/item.service";
import { MessageService } from "@services/message.service";
import { ProjectService } from "@services/project.service";
import { map, mergeMap } from "rxjs/operators";
import * as ProjectActions from './project.action';

@Injectable()
export class ProjectEffects {
    constructor(
        private actions$: Actions,
        private projectService: ProjectService,
        private itemService: ItemService,
        private messageService: MessageService,
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

    itemDetail$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProjectActions.getItemDetail),
            mergeMap((itemId) => this.itemService.getItem(itemId).pipe(
                map((item: any) => ProjectActions.getItemDetailSuccess(item)),
            ))
        )
    });

    messageByChannel = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProjectActions.getMessageForChannel),
            mergeMap((channelRequest) => this.messageService.getMessageByChannelId(channelRequest)
                .pipe(
                    map((messages: any) => ProjectActions.getMessageForChannelSuccess(messages))
                )),
        )
    });

    createMessage = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProjectActions.createNewMessage),
            mergeMap((messageRequest) => this.messageService.createMessage(messageRequest)
                .pipe(
                    map((message: any) =>{ 
                        console.log(message);
                        return ProjectActions.createNewMessageSuccess(message)
                    })
                )),
            )
    });
}