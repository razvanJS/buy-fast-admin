
import { useParams } from "react-router"

import { useDispatch, useSelector } from "react-redux"
import { ProductsContainer,ProductsTitle } from "./products.styles"

import { productsDataSelect } from "../../store/products/products-selectors"
import { useEffect, useState } from "react"
import ItemProductIndex from "../product-index-item/product-item.component"
import ItemAddProduct from "../add-product/add-product.component"
import { setLastIdProductsStart } from "../../store/products/products-actions"
import { lastIDProducts } from "../../store/products/products-selectors"

const ProductsComponent=()=>{
const {product}=useParams()


const dataProducts=useSelector(productsDataSelect)
   const [productItem,setProductItem]=useState({})
   
  const dispath=useDispatch()
  
   useEffect(()=>{

     

      const awaitForData=async ()=>{
        const products=await dataProducts
        setProductItem(products)
        

       
      }
      awaitForData()
    
   },[product,dataProducts])

 if(!productItem[0])return

const productItemFilter=productItem.filter(value=>value.title===product)[0]



if(!productItemFilter)return;
if(productItemFilter.items){
   const itemsSort=productItemFilter.items.sort((a,b)=>a.id-b.id)
   
   
  return (
    <>
    <ProductsTitle>{productItemFilter.title.toLocaleUpperCase()}</ProductsTitle>
    <br></br>

    <ProductsContainer>
        {itemsSort.map(item=><ItemProductIndex key={item.id} item={item}/>)}
         <ItemAddProduct item={productItemFilter}></ItemAddProduct>
      
    </ProductsContainer>
    </>
  )
}
else{
  return (
    <>
    <ProductsTitle>{productItemFilter.title.toLocaleUpperCase()}</ProductsTitle>
    <br></br>

    <ProductsContainer>
        
         <ItemAddProduct item={productItemFilter}></ItemAddProduct>
      
    </ProductsContainer>
    </>
  )

}

   

}





export default ProductsComponent

