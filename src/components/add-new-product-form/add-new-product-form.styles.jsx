import styled from "styled-components";
import { FormDiv } from "../add-category-form/add-category-directory-form.styles";
import { RemoveXdivRename } from "../category-rename/category-rename.styles";



export const FormContainerProduct=styled(FormDiv)`

height:100%;
width:100%;
opacity:.7;
border:10px solid white;
tranisiton:all .2s ease-out;
${RemoveXdivRename}{
color:black;
opacity:.65;
}
&:hover{
    color:red;
    opacity:.9;
    tranisiton:all .2s ease-out;
    }

button{
    position:relative;
    top:-10%;
    font-size:10px;
    margin:0 auto;
    display:flex;
    tranisiton:all .2s ease-out;
    &:hover{

    opacity:1;
    }
    
};

input{
  height:1vh;
  backgournd-color:white;


}
`