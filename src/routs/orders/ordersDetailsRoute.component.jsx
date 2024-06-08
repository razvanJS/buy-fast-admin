
import { Fragment} from 'react'
import { Route,Routes, useParams } from 'react-router'
import { or } from 'firebase/firestore'
import PreviewOrders from '../../components/orderPreview/orderPreview.componet'

import OrderDeatils from '../../components/orderDetails/orderDetails.component'
import OrderProducts from '../../components/order-products/order-products.componet'


const OrdersDetailsRoute=()=>{
   
  
  
    return(
   <Fragment>

        <Routes>
          <Route index element={<PreviewOrders></PreviewOrders>}></Route>
           <Route path={`:orders/*`} element={<OrderDeatils/>}>
         
            </Route> 
            <Route path=':orders/:products' element={<OrderProducts/>}></Route>
        
        </Routes>


   </Fragment>
 
     

    
    )
    
    
}

export default OrdersDetailsRoute