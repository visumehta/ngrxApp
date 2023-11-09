import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState, productAdapter } from "./product.adapter";

export const selectProductState = createFeatureSelector<ProductState>('products');
export const selectProductEntities = createSelector(
    selectProductState,
    productAdapter.getSelectors().selectAll
)

// Get product by id
export const selectProductById = createSelector(
    selectProductState,
    (state: ProductState) => state.ids
)