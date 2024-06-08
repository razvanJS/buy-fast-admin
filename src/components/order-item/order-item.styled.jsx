import styled from "styled-components";



export const RemoveBtn=styled.div`

 opacity:0;
 color:red;
 currsor:pointer;
 transition:all .4s;



     
`


export const RemoveBtnDiv=styled.div` 
position: absolute;
top: .5px;
left:.5px;
background-color: black;
color: red;
border: none;
opacity:0;
width: 25px;
height: 30px;
cursor: pointer;
font-size: 20px;
line-height: 30px;
text-align: center;
z-index: 10;
transition:all .4s;
&:hover{
  background-color:white;
 
  ${RemoveBtn}{
    color:black;
  }

 

}


`
export const Paragraf=styled.p`
position:absolute;
top:100px;
left:10px;
border:10px solid black;
color:white;
background-color:black;
margin:0 auto;
font-size:16px;
color:red;
font-weight:800;
opacity:0


`

export const OrderItemContainer=styled.div`

width: 100%;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
position: relative;


img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }
  button {
    width: 100%;
    opacity: 0.7;
    position: absolute;
    top: 17rem;
    transition:all .3s;
    display: none;
    currsor:pointer;8482
  }
  &:hover {
    currsor:pointer;
    img {
      opacity: 0.4;
    }
   
    ${RemoveBtn}, ${RemoveBtnDiv},${Paragraf}{
      opacity:0.87;
      currsor:pointer;
      
    }
    button {
      opacity: 0.85;
      display: flex;
    }
`
export const OrderFooter=styled.div`
width: 100%;
height: 5%;
display: flex;
justify-content: space-between;
font-size: 18px;

`
export const SpanFnLn=styled.span`
width: 90%;
margin-bottom: 15px;
`
export const SpanTotalPrice=styled.span`
width: 10%;
`

export const RemoveElement=styled.div`
position:absolute;
width:94%;
top:40px;


button{

  opacity: 0.7;
  position: absolute;
  top: 14.5rem;
  transition:all .3s;
  display: none;
  currsor:pointer;
  min-width: 50%;
  width: auto;
  color:red;
  font-weight:800;
  &:hover{
    color:red
  }
}

button:nth-child{
  &(2){
     position:absolute;
     left:56%

  }
}




`

