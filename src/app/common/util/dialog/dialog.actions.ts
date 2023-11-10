import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const openDialogWithSelectedItemActions = createActionGroup({
    source: 'Pass Params To Dialog',
    events: {
        'openDialog': props<{selectedProduct: any}>(),
        'closeDialog': props<{params: any}>()
    }
})

