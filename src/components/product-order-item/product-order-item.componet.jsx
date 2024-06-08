
import { ImgContainer,CheckoutItemContainer,SpanName,SpanQuantity,SpanPrice,SpantTotalPrice ,Image,QuantityContainer} from "./product-order-item.styles"

const ProductsItems=({productItem})=>{
    const{id,name,imageUrl,quantity,price}=productItem


    return(
        <CheckoutItemContainer key={id}>
         <ImgContainer>
            <Image src={imageUrl} alt={`${name}`}></Image>
            </ImgContainer>   
           
       <SpanName >{name}</SpanName>
       <QuantityContainer>
       <SpanQuantity>{quantity}</SpanQuantity> </QuantityContainer>
       <SpanPrice> {price}</SpanPrice>
       <SpantTotalPrice>{price*quantity}</SpantTotalPrice>
       

     </CheckoutItemContainer>

    )

}
export default ProductsItems