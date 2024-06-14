import Button from "../button/button.component"
import { Input } from "../input-form/input-form.styles"
import { RenameContainer } from "./category-rename.styles"


const RenameComponet=({isRenameBtnClick})=>

{
    const[inputRenameValue,setInputRenameValue]=useState('')
return(
    <RenameContainer>
    <form onSubmit={(event)=>{
        event.preventDefault()
        console.log(inputRenameValue)

    }}>
         <Input type='text' name="rename-input" value={inputRenameValue.toLocaleUpperCase()} onChange={(e)=>{
        
          setInputRenameValue(e.target.value)
         }}></Input><br/>
        <Button type='submit'>New Name</Button>
    </form>
    </RenameContainer>
)

}


export default RenameComponet