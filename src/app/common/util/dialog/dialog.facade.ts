import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { dialogActions } from "./dialog.actions";
// import { MatDialog } from "@angular/material/dialog";
import { UpdateProductComponent } from "src/app/product/dialogs/update-product/update-product.component";

@Injectable({
    providedIn: 'root'
})

export class dialogFacade {
    store = inject(Store);
    // dialog = inject(MatDialog);

    openDialogUsingId(productId: number) {
        // const dialogRef = this.dialog.open(UpdateProductComponent, {data: productId});
        // dialogRef.afterClosed().subscribe(result => {
        //     console.log('close dialog', result);
            
        //     // Perform any actions after the dialog is closed
        //   });
        
        this.store.dispatch(dialogActions.openDialog({productId}));
    }

    closeDialog() {
        this.store.dispatch(dialogActions.closeDialog());
    }
}