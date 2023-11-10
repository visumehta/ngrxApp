import { Injectable, inject } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { openDialogWithSelectedItemActions } from "./dialog.actions";
import { tap } from "rxjs";
import { UpdateProductComponent } from "src/app/product/dialogs/update-product/update-product.component";
@Injectable({
    providedIn: 'root'
})
export class DialogEffects {
    actions$ = inject(Actions);
    dialog = inject(MatDialog);
    openProductModal$ = createEffect(() => 
        this.actions$.pipe(
            ofType(openDialogWithSelectedItemActions.openDialog),
            tap((action) => this.dialog.open(UpdateProductComponent, {data: action.selectedProduct, width: '600px'}))
        ), {dispatch: false}
    )
}