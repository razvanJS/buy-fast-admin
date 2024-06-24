import styled from "styled-components";
import { RemoveXdivRename } from "../category-rename/category-rename.styles";
 const breakepointMobile='768px'
 const breakepontTablet='1024px'
export const NewItemBody=styled.div`
opacity: 0.6;

height:40%;
padding: 0 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid black;
background-color: white;
opacity: 0.7;
position: absolute;

${RemoveXdivRename}{
  right:1%;
}

@media screen and (max-width:${breakepontTablet}){
  height:30%;

}
@media screen and (max-width:${breakepointMobile}){
  height:50%;

}

@media screen and (width:912px){
  height:45%;

}
@media only screen and (min-width:820px){
  height:45%;

}
@media screen and (width:540px){
  height:50%;

}
@media screen and (width:1024px){
  height:50%;

}
@media screen and (width:1280px){
  height:50%;

}

}

`


export  const CategoryElementDivRemove=styled.div`

position:relative;
p{
    
    font-size:1rem;
    font-weight:800;
    color:red;
    margin-top:-8%;
}
button{
    opacity: 0.8;
    position:absolute;
    color:red;
    font-weight:800;
    min-width: 50%;
 
    top:70%;
    left:-5%;
   
 
}
  button:nth-child{
    &(2){
       position:absolute;
       left:55%
  
    }
  }
  @media only screen and (min-width:820px){
    height:45%;
    button{
      top:60%;
    }
  }
 

  @media screen and (width:375px),screen and (width:344px){
    p{
        font-size:10px;
    }
  } 
  
  @media screen and (width:390px){
    p{
        font-size:13px;
    }
    button{
        top:120%;
    }
  } 
  @media screen and (width:360px){
    p{
        font-size:13px;
    }
    button{
        top:70%;
    }
  } 
  @media screen and (width:1024px){
    p{
        font-size:13px;
    }
    button{
        top:60%;
        width:40%;
    }
  } 
  @media screen and (width:912px){
    p{
        font-size:13px;
    }
    button{
        top:90%;
    }
  } 

      
`
