import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { ProductsModel } from "./product.model";
import { Update } from "@ngrx/entity";

export const getProductActions = createActionGroup({
    source: 'Products',
    events: {
        'getAllProducts': emptyProps(),
        'productSuccess': props<{products: ProductsModel[]}>(),
        'loadProductsFailure': props<{error: string}>()
    }
});

export const getProductByIdActions = createActionGroup({
    source: 'Get Product By Id',
    events: {
        'getProductById': props<{productId: number}>(),
        'getProductByIdSuccess': props<{product: ProductsModel}>(),
        'getProductByIdFailure': props<{error: string}>()
    }
})

export const updateProductActions = createActionGroup({
    source: 'Update Product',
    events: {
        'updateProduct': props<{productId: number, changes: Partial<ProductsModel>}>(),
        'updateProductSuccess': props<{change: ProductsModel, successMessage: string}>(),
        'updateProductFailure': props<{error: string}>()
    }
})


// export const updateProductActions = createActionGroup({
//     source: 'Update Product',
//     events: {
//         'updateProduct': props<{productId: number, updateProduct: Update<ProductsModel>}>(),
//         'updateProductSuccess': props<{products: ProductsModel}>(),
//         'updateProductFailure': props<{error: string}>()
//     }
// });