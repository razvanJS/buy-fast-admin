import styled from "styled-components"
import { breakepointMobile,breakepontTablet } from "../../assets/breakepoints"


export const SpanTotal=styled.span`
display:flex;
    
margin-top: 30px;
margin-left:auto;
font-size: 27px;


`
export const CheckoutHeader=styled.div`
width: 100%;
padding: 10px 0;
display: flex;
gap:3rem;
justify-content: space-between;
border-bottom: 1px solid darkgrey;

`
export const HeaderBlock=styled.div`
text-transform: capitalize;
width:19vh;
margin-left:2vh ;
gap:1px

&:last-child {
  width: 7%;
}


`
export const CheckoutContainer=styled.div`
width: 65%;
min-height: 90vh;
display: flex;

flex-direction: column;
align-items: center;
margin: 50px auto 0;
@media screen and (width:1024px){
  width:70% ;

}


@media screen and (max-width:${breakepontTablet}) {
  width:100% ;
  
  
}

@media screen and (max-width:${breakepointMobile}) {
  width:100%;
  display: flex;
  flex-direction:column;
  align-items:center ;


  ${CheckoutHeader}{
    width:121% ;

    gap:0.5rem;
    
    
 
    ${HeaderBlock}{
      width:27% ;
     
      span{
        font-size:0.6rem ;
        
        margin-left:-1rem;

      }
     
    }
  }
  ${SpanTotal}{
    font-size: 1.3rem;
  }
}
@media screen and (width:280px) {
  width:110% ;
  margin-left: -.5rem;
  ${HeaderBlock}{
   
   
   
    span{
      font-size:0.4rem ;
    
    }
   
  }
  
}
@media screen and (width:540px) {
  width:80% ;
 
  
}
@media screen and (width:412px) {
  margin-left:.2rem
 
  
}


}
 
`


