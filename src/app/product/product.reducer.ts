import { createReducer, on, Action } from "@ngrx/store";
import { ProductState, initialProductState, productAdapter } from "./product.adapter";
import { getProductActions, updateProductActions } from "./product.actions";

const _productReducer = createReducer<ProductState>(
    initialProductState,
    // Get all products
    on(getProductActions.getAllProducts, (state) => ({
        ...state
    })),
    on(getProductActions.productSuccess, (state, {products}) => {
        return productAdapter.setAll(products, state)
    }),
    on(getProductActions.loadProductsFailure, (state, {error}) => ({
        ...state,
        error
    })),
    // Get product details
    
    // Update products
    on(updateProductActions.updateProduct, (state, {updateProduct}) => {
        return productAdapter.updateOne(updateProduct, state)
    })
)

export function productReducer(state:ProductState|undefined, action: Action) {
    console.log('state.......',state);
    console.log('action.....',action);
    
    return _productReducer(state, action);
}