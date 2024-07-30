import { Outlet } from "react-router"

import {ReactComponent as CrownLogo} from './crown.svg'
import { Link} from "react-router-dom"
import { NavConatiner,NavLogo,NavLink ,NavLinksContainer} from "./navigation.styles"
import { useDispatch, useSelector } from "react-redux"
import { currentUserSelect } from "../../store/admin-user/admin.selctors"
import { signOutUser } from "../../store/admin-user/admin.actions"

const Navigation=()=>{
  const currentUser=useSelector(currentUserSelect)
  const dispatch=useDispatch()
   

    return(
        <>
        
        <NavConatiner>
      <NavLogo to='/'><CrownLogo/></NavLogo> 
         <NavLinksContainer>
            <NavLink to='/orders'>Orders</NavLink>{
                !currentUser?<NavLink className='nav-link' to='/auth'>Sign In</NavLink>
                :<NavLink onClick={()=>{
                    dispatch(signOutUser())
                }} className='nav-link'>Sign Out</NavLink>
            }
       
            </NavLinksContainer>   
           
       </NavConatiner>


        <Outlet/>
        </>
    )

}
export default Navigation