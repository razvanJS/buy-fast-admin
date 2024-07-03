import { createSelector } from "reselect";
const productsReducer=(state)=>state.products

export const productsDataSelect=createSelector(
  [productsReducer],
  (slice)=>slice.productsData


)

