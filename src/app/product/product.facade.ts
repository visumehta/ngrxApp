import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectProductById, selectProductEntities } from "./product.selectors";
import { getProductActions, getProductByIdActions, updateProductActions } from "./product.actions";
import { ProductsModel } from "./product.model";

@Injectable({
    providedIn: 'root'
})

export class ProductFacade{
    store = inject(Store);
    productList$ = this.store.select(selectProductEntities);
    oneProduct$ = this.store.select(selectProductById)

    getAllProducts(): void {
        this.store.dispatch(getProductActions.getAllProducts());
    }

    getProductById(productId: number) {
        this.store.dispatch(getProductByIdActions.getProductById({productId}));
    }

    updateProduct(id: number, change: ProductsModel) {
        this.store.dispatch(updateProductActions.updateProduct({productId: id, changes: change}));
    }


}