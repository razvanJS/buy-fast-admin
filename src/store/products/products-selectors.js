import { createSelector } from "reselect";
const productsReducer=(state)=>state.products

export const productsDataSelect=createSelector(
  [productsReducer],
  (slice)=>slice.productsData


)
export const lastIDProducts=createSelector(
  [productsReducer],
  (slice)=>slice.lastId


)



export const isLoadingProductsSelector=createSelector(
  [productsReducer],
  (slice)=>slice.isLoadingProduct
)