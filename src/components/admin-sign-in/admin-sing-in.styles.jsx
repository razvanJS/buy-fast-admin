import styled from "styled-components";
import { breakepointMobile,breakepontTablet } from "../../assets/breakepoints";
export const SignInContainer=styled.div`
display: flex;
flex-direction: column;
width:380px;
margin:0 auto;
margin-top:7%;

h2{
  margin: 10px 0;
}
@media screen and (width:1024px) {
  margin-top:1rem
   
}
@media screen and (max-width:${breakepontTablet}) {
  margin:2rem auto ;
  width:80% ;

 
}
@media screen and (max-width:${breakepointMobile}) {
  width:100% ;
  margin-top:2rem ;
  @media screen and (width:360px) {
    width:100% ;
    
  }
  
}
`
export const BtnContainer=styled.div`
display:flex ;
justify-content:space-between ;
gap:1.5px;

button{
width:100%}
@media screen and (width:1024px) {
  gap:3px ;
   position:relative ;
   left:1rem ;
   
}
@media screen and (max-width:${breakepontTablet}) {
  display:flex ;
  width:100% ;
  flex-direction:column ;
  margin:0 auto ;
  gap:.5px ;
  
}
@media screen and (max-width:${breakepointMobile}) {
  display:flex ;
  flex-direction:column;
  gap:1px;
  margin:0 auto ;
  
}

`


