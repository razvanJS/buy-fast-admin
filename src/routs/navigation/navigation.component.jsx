import { Outlet } from "react-router"

import {ReactComponent as CrownLogo} from './crown.svg'
import { Link} from "react-router-dom"
import { NavConatiner,NavLogo,NavLink ,NavLinksContainer} from "./navigation.styles"
import { breakepointMobile,breakepontTablet } from "../../assets/breakepoints"

const Navigation=()=>{


    return(
        <>
        
        <NavConatiner>
      <NavLogo to='/'><CrownLogo/></NavLogo> 
         <NavLinksContainer>
            <NavLink to='/orders'>Orders</NavLink>
            <NavLink className='nav-link' to='/auth'>Sign In</NavLink>
            </NavLinksContainer>   
           
       </NavConatiner>


        <Outlet/>
        </>
    )

}
export default Navigation