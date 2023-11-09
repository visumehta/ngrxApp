import { createReducer, on, Action } from "@ngrx/store";
import { ProductState, initialProductState, productAdapter } from "./product.adapter";
import { getProductActions, getProductByIdActions, updateProductActions } from "./product.actions";

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
   on(getProductByIdActions.getProductById, (state, {productId}) => ({
    ...state,
    productId
   })),
   on(getProductByIdActions.getProductByIdSuccess, (state, {product}) => ({
    ...state,
    product
   })),
   on(getProductByIdActions.getProductByIdFailure, (state, {error}) => ({
    ...state,
    error
   })),

    // Update Product
    on(updateProductActions.updateProduct, (state, {productId,changes}) => {
        return productAdapter.updateOne({id: productId,changes}, state)
    }),
    on(updateProductActions.updateProductSuccess, (state, {change, successMessage}) => ({
        ...state,
        change, successMessage
    })),
    on(updateProductActions.updateProductFailure, (state, {error}) => ({
        ...state,
        error
    }))
    
   
)

export function productReducer(state:ProductState|undefined, action: Action) {
    // console.log('state.......',state);
    // console.log('action.....',action);
    
    return _productReducer(state, action);
}