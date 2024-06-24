
import { breakepointMobile } from "../../assets/breakepoints"
import styled from "styled-components"
export const DirectoryContainer=styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-top:1% ;

@media screen and (max-width:${breakepointMobile}) {
    display:grid ;
    grid-template-columns:repeat(1,1fr) ;
 
    @media screen and (width:280px) {
       width:145% ;
       margin-left: -2.87em;
       
       
      
        
      }
    }
   //  @media screen and (width:540px) {
   //    display:grid;
   //    grid-template-columns:repeat(1,1fr) ;
   //     width: 110%;
   //     margin-left:-1rem ;
   //     display: flex;
   //     flex-wrap: wrap;
   //     justify-content: space-between;
   //  }
`
