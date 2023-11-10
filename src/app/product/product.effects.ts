import { Injectable, inject } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { getProductActions, getProductByIdActions, updateProductActions } from "./product.actions";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { HttpService } from "../services/http.service";
import { MatDialog } from "@angular/material/dialog";

@Injectable()
export class ProductEffects {

  action$ = inject(Actions);
  _httpService = inject(HttpService);
  dialog = inject(MatDialog);

  loadProducts$ = createEffect(() =>
    this.action$.pipe(
      ofType(getProductActions.getAllProducts),
      mergeMap(() =>
        this._httpService.getAllProducts().pipe(
          map((products) => getProductActions.productSuccess({ products })),
          catchError((error) =>
            of(getProductActions.loadProductsFailure({ error }))
          )
        )
      )
    )
  );

  loadProductById$ = createEffect(() =>
    this.action$.pipe(
      ofType(getProductByIdActions.getProductById),
      mergeMap((action) =>
        this._httpService.getProductDetails(action.productId).pipe(
          map((product) =>
            getProductByIdActions.getProductByIdSuccess({ product })
          ),
          catchError((error) =>
            of(getProductByIdActions.getProductByIdFailure({ error }))
          )
        )
      )
    )
  );

  updateProduct$ = createEffect(() => 
    this.action$.pipe(
      ofType(updateProductActions.updateProduct),
      mergeMap((action) => 
        this._httpService.updateProduct(action.productId, action.changes).pipe(
          map((change) => 
            updateProductActions.updateProductSuccess({change, successMessage:'Product updated successfully.'})   
          ),
          catchError((error) => of(updateProductActions.updateProductFailure({error})))
        )
      )
    )
  );

}
