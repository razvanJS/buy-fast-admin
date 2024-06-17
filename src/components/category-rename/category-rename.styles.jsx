
import { Input } from "../input-form/input-form.styles";
import styled from "styled-components";



export const RenameContainer=styled.div`

form ${Input}{
  font-size: 14px;
  padding: 0;
  margin:0 auto;
  width:50%;
  font-weight:bolder;
  
}
button{
  margin:0 auto;
}

`
export const RemoveXdiv=styled.div`
color:red;
transition:all .2s;
position:absolute;
right:5%;
top:2%;
&:hover {
  font-weight:800;

}
`

