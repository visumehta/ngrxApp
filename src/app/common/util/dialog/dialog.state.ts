export interface DialogState {
    open: boolean;
    selectedProductId: number | null
}

export const initialDialogState: DialogState = {
    open: false,
    selectedProductId: null
}