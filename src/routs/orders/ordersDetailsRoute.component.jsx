
import { Fragment} from 'react'
import { Route,Routes} from 'react-router'
import { or } from 'firebase/firestore'
import PreviewOrders from '../../components/orderPreview/orderPreview.componet'

import OrderDeatils from '../../components/orderDetails/orderDetails.component'
import OrderProducts from '../../components/order-products/order-products.componet'
import { useSelector } from 'react-redux'
import { orderLoad } from '../../store/orders/orders-selectors'
import Spinner from '../../components/spinner/spinner.componet'
const OrdersDetailsRoute=()=>{
   const orderIsLoading=useSelector(orderLoad)
  
  
    return(
   <Fragment>

        <Routes>
          <Route index element={orderIsLoading?<Spinner/>:<PreviewOrders></PreviewOrders>}></Route>
           <Route path={`:orders/*`} element={orderIsLoading?<Spinner/>:<OrderDeatils/>}>
         
            </Route> 
            <Route path=':orders/:products' element={orderIsLoading?<Spinner></Spinner>:<OrderProducts/>}></Route>
        
        </Routes>


   </Fragment>
 
     

    
    )
    
    
}

export default OrdersDetailsRoute