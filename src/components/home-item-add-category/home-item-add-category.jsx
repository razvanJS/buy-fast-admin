import { ItemContainer,BackgroundImage,ItemBody } from "../home-item-container/home-item-container-style"
import Button from "../button/button.component"
import { useState } from "react"

import AddCategoryForm from "../add-category-form/add-category-form.componet"

const HomeItemAddCategory=()=>{
    
    const [isAddCategoryBtnClicked,setIsAddCategoryBtnClicked]=useState(false)

    return(<ItemContainer>
            
           
        <BackgroundImage style={{backgroundImage:`url(https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?cs=srgb&dl=pexels-bohlemedia-1884581.jpg&fm=jpg)`}}></BackgroundImage>
        
         
        <ItemBody>
           <br/>
            {isAddCategoryBtnClicked?<>
               <AddCategoryForm></AddCategoryForm>
            </>:<Button onClick={()=>setIsAddCategoryBtnClicked(true)}>ADD CATEGORY</Button>}
          
            
        </ItemBody>
        
        </ItemContainer>)
}


export default HomeItemAddCategory