import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { ProductsModel } from "src/app/product/product.model";

// export const dialogActions = createActionGroup({
//     source: 'openDialogWithId',
//     events: {
//         'openDialog': props<{productId: number}>(),
//         'closeDialog': emptyProps()
//     }
// })

export const openDialogWithSelectedItemActions = createActionGroup({
    source: 'Pass Params To Dialog',
    events: {
        'openDialog': props<{selectedProduct: any}>(),
        'closeDialog': emptyProps()
    }
})

