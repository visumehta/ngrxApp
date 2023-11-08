import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const dialogActions = createActionGroup({
    source: 'openDialogWithId',
    events: {
        'openDialog': props<{productId: number}>(),
        'closeDialog': emptyProps()
    }
})