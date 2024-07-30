import { useSelector } from "react-redux"
import { detailsDataSelect} from "../../store/orders/orders-selectors"
import { CheckoutContainer,CheckoutHeader, HeaderBlock,SpanTotal} from "./order-products.styles"
import ProductsItems from "../product-order-item/product-order-item.componet"

const OrderProducts=()=>{
 
    const {products,total}=useSelector(detailsDataSelect)
  
    return (
        
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                
                </HeaderBlock>
                <HeaderBlock>
                <span>Description</span>
                    
                </HeaderBlock>
                <HeaderBlock>
                <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                <span>Total</span>
                </HeaderBlock>
             
                

            </CheckoutHeader>
            {products.map(item=>{
                    const {id}=item
                    if(!item)return;
                    return (<ProductsItems key={id} productItem={item}></ProductsItems>)
                })}
              
                
            <SpanTotal>Total:{total}   </SpanTotal>
           
             
    </CheckoutContainer>
 
    
    )
}   
    



export default OrderProducts