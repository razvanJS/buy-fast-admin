
import styled from "styled-components";
import { RemoveXdivRename } from "../category-rename/category-rename.styles";
import { RemoveElement } from "../order-item/order-item.styled";
import { Input } from "../input-form/input-form.styles";
import { FormNameFooter, FormPriceFooter } from "../product-change-details/product-change-details.styles";
import { ImageContainerChange } from "../category-change-image/category-change-image.styled";

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

  ${ImageContainerChange}{
    poisi
   ${Input}{
    position:absolute
    top:10px;
   }
  }
  @media  only screen and (device-width: 1024px), 
  (device-width: 820px),
  (device-width: 912px),
  (device-width: 540px),
  (device-width: 853px),
  (device-width: 1280px)
  {
    button{
      font-size:10px;
    }
  }
 

`


export const ProductFooter=styled.div`
width: 100%;
height: 5%;
display: flex;
justify-content: space-between;
font-size: 18px;

${FormNameFooter}{
  
  margin-top:-2.2rem;
  margin-left:-.4rem;
  width:80%;
   ${Input}{
    width:100%;
    top:10px;
    background:transparent;
    border-bottom:none;
    color:red
  }
}
${FormPriceFooter}{
  margin-top:-2.3rem;
  margin-left:-5rem;
  width:50%;
  ${Input}{
    color:red;
    margin-left:75%;
    width:50%;
    top:10px;
    background:transparent;
    border-bottom:none;
  }
}

`
export const SpanName=styled.span`
width: 90%;
margin-bottom: 15px;
cursor:pointer;
tranisiton:all 1s ease-out;
&:hover{
  color:red
}


`
export const SpanPrice=styled.span`
width: 10%;
cursor:pointer;
tranisiton:all 1s ease-out;
&:hover{
  color:red
}
`

