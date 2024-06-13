import styled from "styled-components";
const breakepontTablet='1025px'
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
left:11.5vh;

`

export const SpantTotalPrice=styled.span`
width:35%;
color:rgb(119, 119, 119) ;
 font-weight:549 ;
 position:relative;
 left:17vh;
 
`
export const SpanQuantity=styled.span`
margin: 0 60%;



`
export const QuantityContainer=styled.div`
display: flex;
flex-direction:row;
width: 14vh;
position:relative;
right:8.6vh;


`


export const CheckoutItemContainer=styled.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 22px;
align-items: center;
@media screen and (width:1280px){
  ${SpantTotalPrice}{
    left:100px;
  }
  ${SpanPrice}{
    left:65px;
  }
  ${QuantityContainer}{
    left:-35px;
  }
}


@media screen and (max-width:1025px) {
  width:125% ;
  ${SpanName} ,${SpanPrice},${QuantityContainer},${SpantTotalPrice}{
    width: 11vh;

    left:-40px;
  }
  ${Image}{
    margin-left:95px;
    width:60%;
  }
  ${SpanPrice}{
    left:100px;
  }
  ${SpantTotalPrice}{
    left:115px;
  }
  ${QuantityContainer}{
    left:10px;
  }

 
}

@media screen and (max-width:750px) {
  width:125% ;
  ${SpanName} ,${SpanPrice},${QuantityContainer},${SpantTotalPrice}{
    width: 11vh;
    font-size:12px ;
    left:-40px;
  }
  ${Image}{
    margin-left:5px
  }
  ${SpanPrice}{
    left:4px;
  }
  ${SpantTotalPrice}{
    left:5px;
  }
  ${QuantityContainer}{
    left:-25px;
  }

 
}

@media screen and (width:768px) {
  margin-left:1.5rem ;
  
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