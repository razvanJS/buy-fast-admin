
import { Route,Routes } from 'react-router';
import Navigation from './routs/navigation/navigation.component';
import { GlobalStyle } from './App.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrdersStart, orderDetailsAction,orderDetailsIdAction } from './store/orders/orders-actions.js';
import { useEffect } from 'react';

import OrdersDetailsRoute from './routs/orders/ordersDetailsRoute.component.jsx';


const App=()=>{

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchOrdersStart())
   },[])
  
 

  
 

  return (
<>
    <Routes>
    <Route path='/'element={<Navigation/>}>
     <Route path='/orders/*' element={<OrdersDetailsRoute/>}></Route> 
     <Route path='/auth' element={<p>SignIn</p>}></Route> 
   

       
    </Route>
  </Routes>
  <GlobalStyle>
     


  </GlobalStyle>
 
  </>
  )
}

export default App;
