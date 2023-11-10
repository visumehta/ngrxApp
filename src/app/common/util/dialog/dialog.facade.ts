import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { openDialogWithSelectedItemActions } from "./dialog.actions";
import { selectedItemById } from "./dialog.selectors";

@Injectable({
    providedIn: 'root'
})

export class dialogFacade {
    store = inject(Store);   
    getSelectedItem$ = this.store.select(selectedItemById);

    openDialogWithSelectedProduct(selectedProduct: any) {
        this.store.dispatch(openDialogWithSelectedItemActions.openDialog({selectedProduct}));
    }

    closeDialog(params: any) {
        // this.store.dispatch(openDialogWithSelectedItemActions.closeDialog(params))
    }
}