import { createReducer, on, Action } from "@ngrx/store";
import { DialogState, initialDialogState } from "./dialog.state";
import { openDialogWithSelectedItemActions } from "./dialog.actions";

const _dialogReducer = createReducer(
    initialDialogState,

    on(openDialogWithSelectedItemActions.openDialog, (state, {selectedProduct}) => ({
        ...state,
        open: true,
        selectedProduct
    })),

    on(openDialogWithSelectedItemActions.closeDialog, (state) => ({
        ...state,
        open: false
    }))
)

export function dialogReducer(state: DialogState | undefined, action: Action) {
    console.log('dialog state', state);
    console.log('dialog action', action);
    
    return _dialogReducer(state,action);
}