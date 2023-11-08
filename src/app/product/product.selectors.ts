import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState, productAdapter } from "./product.adapter";

export const selectProductState = createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(
    selectProductState,
    productAdapter.getSelectors().selectAll
)