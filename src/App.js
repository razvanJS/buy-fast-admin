
import { Route,Routes } from 'react-router';
import Navigation from './routs/navigation/navigation.component';
import { GlobalStyle } from './App.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrdersStart} from './store/orders/orders-actions.js';
import { fetchCategoiresDirectoryStart } from './store/categoriesDirectory/categories-directory-actions.js';
import { fetchProductsDataStart } from './store/products/products-actions.js';
import { useEffect } from 'react';

import OrdersDetailsRoute from './routs/orders/ordersDetailsRoute.component.jsx';
import Home from './routs/home/home-componet.jsx';
import IndexRoutes from './routs/index-routes/index-routes.jsx';
import { productsDataSelect } from './store/products/products-selectors.js';

const App=()=>{

  
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchCategoiresDirectoryStart())
  },[])


  useEffect(()=>{
    dispatch(fetchProductsDataStart())

   })
  useEffect(()=>{
    dispatch(fetchOrdersStart())
   },[])
  
 
  
  
 

  return (
<>
    <Routes>
    <Route path='/'element={<Navigation/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/*' element={<IndexRoutes/>}></Route>
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
