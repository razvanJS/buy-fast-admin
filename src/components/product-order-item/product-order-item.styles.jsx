import styled from "styled-components";


export const ImgContainer=styled.div`
width: 23%;
padding-right: 20px;

`
export const Image=styled.img`
width: 100%;
height: 100%;
`
export const SpanName=styled.span`
width: 40vh;
margin-left:2%;


`
export const SpanPrice=styled.span`
width: 25vh;
position:relative;
left:13vh;

`
export const SpanTotal=styled.span`


`
export const SpantTotalPrice=styled.span`
width: 26.5vh;
color:rgb(119, 119, 119) ;
 font-weight:549 ;
 margin-left:17%;
`
export const SpanQuantity=styled.span`
margin: 0 40%;


`
export const QuantityContainer=styled.div`
display: flex;
flex-direction:row;
width: 14vh;
position:relative;
right:4.6vh;


`


export const CheckoutItemContainer=styled.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 22px;
align-items: center;



@media screen and (max-width:750px) {
  width:125% ;
  ${SpanName} ,${SpanPrice},${QuantityContainer},${SpantTotalPrice}{
    width: 11vh;
    font-size:12px ;
  }
 
}
@media screen and (width:540px) {
  margin-left:1.5rem ;
  
}

 @media screen and (width:280px) {
  margin-left:1.5rem ;
  ${SpanName} ,${SpanPrice},${QuantityContainer},${SpantTotalPrice}{
     width: 6.63vh;
     font-size:10px ;
     opacity:1
    
   }
   
  
  

`