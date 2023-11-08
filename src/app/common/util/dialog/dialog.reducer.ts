import { createReducer, on, Action } from "@ngrx/store";
import { DialogState, initialDialogState } from "./dialog.state";
import { dialogActions } from "./dialog.actions";

const _dialogReducer = createReducer(
    initialDialogState,
    on(dialogActions.openDialog, (state, {productId}) => ({
        ...state,
        open: true,
        selectedProductId: productId
    })),
    on(dialogActions.closeDialog, (state) => ({
        ...state
    })),
)

export function dialogReducer(state: DialogState | undefined, action: Action) {
    return _dialogReducer(state,action);
}