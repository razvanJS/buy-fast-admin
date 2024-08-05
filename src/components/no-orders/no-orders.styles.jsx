import styled from "styled-components";
import { breakepointMobile, breakepontTablet } from "../../assets/breakepoints";
export const NoOrdersContainer=styled.div`
width:500%;
p{
 
 text-align:center;
  color:grey;
  text-transform:uppercase;
  font-size:5vh;
  margin-top:13rem;
 margin-left:5rem;
  text-shadow: 1px 1.4px 1px grey;
}

@media screen and (max-width:${breakepontTablet}) {
    width:250%;
    p{
    font-size:6vh;
     margin-left:.5rem;
    }
  }

    @media screen and (max-width:${breakepointMobile}) {
    width:100%;
    p{
    font-size:6vh;
     margin-left:.5rem;
    }
     @media screen and (width:540px){
       width:200%;
     }
  }
    
`