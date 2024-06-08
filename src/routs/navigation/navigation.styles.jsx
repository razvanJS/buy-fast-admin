import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakepointMobile,breakepontTablet } from "../../assets/breakepoints";
export const NavConatiner=styled.div`
display:flex ;
justify-content:space-between ;
height:80px ;
width:100% ;
@media screen and (width:360px) {
    width:100% ;
     } 

@media screen and (width:280px) {
width:125% ;
margin-left:-0.46rem ;
}



`
export const NavLinksContainer=styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
margin-left:-1rem ;
@media screen and (max-width:${breakepointMobile}) {
    width: 100%;
    height: auto;
    padding-top:3vh;
}
@media screen and (width:280px){
 width:50px ;
 margin-left:-1rem ;
    
}

@media screen and (max-width:${breakepontTablet})  {
    width:auto ;
}
    
`
export const NavLogo=styled(Link)`
height: 100%;
width: 70px;
height:70px ;
padding: 25px;
@media screen and (width:280px) {
    margin-left:-2rem ;
}
` 
export const NavLink=styled(Link)`

padding: 10px 15px;

    cursor: pointer;
    &:hover{
       color:grey ;
       transition:all .4s ;
    }
    @media screen and (max-width:375px) {
        font-size:14.3px ;
                
        }
        @media screen and (width:280px) {
                font-size:2vh ;
                padding: auto;
                        
        }
        
`