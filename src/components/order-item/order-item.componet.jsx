import { OrderItemContainer,RemoveBtnDiv,RemoveBtn,SpanFnLn,SpanTotalPrice,OrderFooter

} from "./order-item.styled"

import Button from "../button/button.component"

import { useDispatch} from "react-redux"
import { removeOrderItemStart } from "../../store/orders/orders-actions"


import { tr } from "date-fns/locale/tr"
import RemoveOrderComponent from "../remove-order/remove-order.componet"
import {  useNavigate } from "react-router"
import { useState } from "react"



const OrderItem=({orderValue})=>{
   
    
    const dispatch=useDispatch()
  const [isRemoveBtnClicked,setIsRemoveBtnClicked]=useState(false)
   
   const removeXbtnEvent=()=>isRemoveBtnClicked?setIsRemoveBtnClicked(false):setIsRemoveBtnClicked(true)
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
                     <RemoveOrderComponent removeItemEvent={removeItemEvent}
                      isRemoveBtnClicked={isRemoveBtnClicked}
                       setIsRemoveBtnClicked={setIsRemoveBtnClicked}></RemoveOrderComponent>
                      </>
                        }
                    
                        </OrderFooter>
            
                     
                     
                      
                  
                      
                    </OrderItemContainer>
    )
}

export default OrderItem