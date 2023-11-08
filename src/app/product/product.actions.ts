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

export const getProductDetailsActions = createActionGroup({
    source: 'getProductDetails',
    events: {
        'getProductDetails': emptyProps(),
        'getProductDetailsSuccess': emptyProps(),
        'getProductDetailsFailure': props<{error: string}>()
    }
})

export const updateProductActions = createActionGroup({
    source: 'Update Product',
    events: {
        'updateProduct': props<{productId: number, updateProduct: Update<ProductsModel>}>(),
        'updateProductSuccess': props<{products: ProductsModel}>(),
        'updateProductFailure': props<{error: string}>()
    }
});