import { useSelector } from 'react-redux'

import { ordersDataSelect } from '../../store/orders/orders-selectors'
import { OrderTitleName,OrderPreviewContainer ,OrderPreview} from './orderPreview.styles'
import { sortDate } from '../../assets/sortDate'
import OrderItem from '../order-item/order-item.componet'

 const PreviewOrders=()=>{
    const ordersData=useSelector(ordersDataSelect)
    const ordersSort=sortDate(ordersData)
    console.log(ordersData)
    return (
        <OrderPreviewContainer>
  
  
     
    <OrderTitleName>Orders</OrderTitleName>
 
    
     
         <OrderPreview>

                    {ordersSort.map(orderValue=>{   

                   return(
                  
                  <OrderItem key={orderValue.uid} orderValue={orderValue}/>

                   ) 
                    
                 })}

                  
                 </OrderPreview>

        
        </OrderPreviewContainer> 
    )
 }
 export default PreviewOrders