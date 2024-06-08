import { OrderItemContainer,RemoveBtnDiv,RemoveBtn,SpanFnLn,SpanTotalPrice,OrderFooter

} from "./order-item.styled"

import Button from "../button/button.component"

import { useDispatch, useSelector } from "react-redux"
import { orderDetailsSucces, removeOrderItemStart } from "../../store/orders/orders-actions"
import { isRemoveBtnCliked } from "../../store/orders/orders-selectors"
import { removeBtnCliked } from "../../store/orders/orders-actions"

import { tr } from "date-fns/locale/tr"
import RemoveOrderComponent from "../remove-order/remove-order.componet"
import { Navigate, useNavigate } from "react-router"
import { useEffect } from "react"
import { ordersDataSelect } from "../../store/orders/orders-selectors"

const OrderItem=({orderValue})=>{
   
    const ordersData=useSelector(ordersDataSelect)
    const dispatch=useDispatch()
   const isRemoveBtnClicked=useSelector(isRemoveBtnCliked)

   const removeXbtnEvent=()=>isRemoveBtnClicked?dispatch(removeBtnCliked(false)):dispatch(removeBtnCliked(true))
   const removeItemEvent=()=>dispatch(removeOrderItemStart(orderValue.uid))
   const nav=useNavigate()
  
   const btnNavigationEvent=()=>{
     
   
     return nav(`/orders/${orderValue.uid}`)
   }
    
    return(
      
        <OrderItemContainer >
              
                <RemoveBtnDiv>
                    
                    <RemoveBtn onClick={removeXbtnEvent}>&#10006;</RemoveBtn>
                
                    </RemoveBtnDiv>
                    
                    <img src={orderValue.products[orderValue.products.length-1].imageUrl} alt={orderValue.firstName}>
                    </img>
                     
                    <OrderFooter>
                     <SpanFnLn>{`${orderValue.firstName} ${orderValue.lastName}`}</SpanFnLn>
                     <SpanTotalPrice>{orderValue.total}</SpanTotalPrice>
                     {isRemoveBtnClicked===false?<><Button onClick={btnNavigationEvent} type='inverted'>Details</Button></>:
                     <>
                     <RemoveOrderComponent removeItemEvent={removeItemEvent}></RemoveOrderComponent>
                      </>
                        }
                    
                        </OrderFooter>
            
                     
                     
                      
                  
                      
                    </OrderItemContainer>
    )
}

export default OrderItem