export interface DialogState {
    open: boolean;
    productId: number | null;
    selectedProduct: any | null;
}

export const initialDialogState: DialogState = {
    open: false,
    productId: null,
    selectedProduct: null
}