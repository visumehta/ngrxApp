import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DialogState } from "./dialog.state";

const selectDialogState = createFeatureSelector<DialogState>('openDialog');

export const selectedItemById = createSelector(
    selectDialogState,
    (state: DialogState) => state.selectedProduct
)