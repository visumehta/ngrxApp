import { ProductsModel } from "./product.model";
import { createEntityAdapter, EntityState } from "@ngrx/entity";


export const productAdapter = createEntityAdapter<ProductsModel>();
export interface ProductState extends EntityState<ProductsModel> {}

export const initialProductState: ProductState = productAdapter.getInitialState();