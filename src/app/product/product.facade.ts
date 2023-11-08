import { Injectable, OnInit, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectAllProducts } from "./product.selectors";
import { getProductActions } from "./product.actions";

@Injectable({
    providedIn: 'root'
})

export class ProductFacade{
    store = inject(Store);

    productList$ = this.store.select(selectAllProducts);



    getAllProducts(): void {
        this.store.dispatch(getProductActions.getAllProducts());
    }

}