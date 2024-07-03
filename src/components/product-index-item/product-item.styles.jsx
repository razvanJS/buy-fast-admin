
import styled from "styled-components";
import { RemoveXdivRename } from "../category-rename/category-rename.styles";
import { RemoveElement } from "../order-item/order-item.styled";

export const ProductCarTConatiner=styled.div`
width: 100%;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
position: relative;

${RemoveElement}{
  
  button{
    top:14.6rem;
    width:30%;

    left:-3%;
    transition: all .4s ease-out;
  }
  button:last-child{
    left:53%;
  }
  p{
    color:red;
    margin-top:5rem;
    font-size:18px;
    border:.4px solid black;
    transition: all .4s ease-out;
    background-color:black;
    opacity:0;
  }
}

img {
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
}
button {
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  font-size:14px;
  opacity:0.85;
 
}
${RemoveXdivRename}{
  opacity:0;
  cursor:pointer;
  color:red;
  font-weight:800;
  transition: all .4s ease-out;
  right:1px;
  top:1px;
  color:white;
}

&:hover {
  ${RemoveXdivRename}{
   
    opacity:0.85;
    
  }
  p{
    opacity:0.85;
  }
  button {
    opacity: 0.85;
    display: flex;
    transition: all .4s ease-out;
  }

`
export const ProductFooter=styled.div`
width: 100%;
height: 5%;
display: flex;
justify-content: space-between;
font-size: 18px;
`
export const SpanName=styled.span`
width: 90%;
margin-bottom: 15px;

`
export const SpanPrice=styled.span`
width: 10%;
`

