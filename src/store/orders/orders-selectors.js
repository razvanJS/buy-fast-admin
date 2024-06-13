import { createSelector } from "reselect";

 const ordersReducer=(state)=>state.orders
export  const ordersDataSelect=createSelector(
    [ordersReducer],
    (slice)=>slice.ordersData
)


export const ordersItemReducer=(state)=>state.orders.orderItemRemove
export const itsOrderItemRemove=createSelector(
    [ordersItemReducer],
    (slice)=>slice.value

)



export const detailsDataSelect =createSelector(
    [ordersReducer],
    (slice)=>slice.orderDetails

)
export const detailsIDSelect =createSelector(
    [ordersReducer],
    (slice)=>slice.orderDetailsUid

)

