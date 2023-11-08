import { Injectable, inject } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { getProductActions } from "./product.actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { HttpService } from "../services/http.service";

@Injectable()
export class ProductEffects {
  action$ = inject(Actions);
  _httpService = inject(HttpService);

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

  // getProductDetails$ = createEffect(() => 
  //     this.action$.pipe(
  //       ofType()
  //     )
  // )
}
