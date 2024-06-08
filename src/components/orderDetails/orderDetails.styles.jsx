import styled from "styled-components";
const breakepointMobile='540px'

export const SpanPay=styled.span``
export const SpanDate=styled.span``
export const TitleContainer=styled.div`

display: flex;
flex-direction:row;
justify-content: space-between;
padding-bottom:10px;
font-size:17px;

 text-transform: capitalize;
${SpanDate} ${SpanPay}{
  color:gre;
text-shadow: 1px 1.4px 1px grey;



}
@media screen and (max-width:${breakepointMobile}){
 font-size:13px;
}


`
export const BorderDiv=styled.div`
border:.2rem solid hsla(0, 0%, 63%, .25);
padding:30px;
`
export const DetailsContainer=styled.div`
display: flex;
flex-direction: column;
width:50%;
max-width:100%;
margin:9vh auto;

form{
  margin-top:-30px
}

button{
  margin-top:-2.9rem;
  border-color:hsla(0, 0%, 15%, .25)
}
h2{
    
    text-align:center;
    color:grey;
    text-transform:uppercase;
    text-shadow: 1px 1.4px 1px grey;
  }

  @media screen and (max-width:${breakepointMobile}){
    width:100%;
    input{
      font-size:11px;
    }
  }

`

