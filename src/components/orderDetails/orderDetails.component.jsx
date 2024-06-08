import InputForm from "../input-form/input-form.component"
import { useDispatch, useSelector } from "react-redux"
import { DetailsContainer,SpanDate,SpanPay ,TitleContainer,BorderDiv} from "./orderDetails.styles"
import Button from "../button/button.component"
import { useNavigate } from "react-router"
import { useParams } from "react-router"
import { useEffect} from "react"

import { detailsDataSelect,ordersDataSelect} from "../../store/orders/orders-selectors"
import { fetchorderDetailsActionStart } from "../../store/orders/orders-actions"


const OrderDeatils=()=>{
   const {orders:uid}=useParams()
  const ordersData=useSelector(ordersDataSelect)
  const dataOfDetails=useSelector(detailsDataSelect)
 const dispatch=useDispatch()

 const nav=useNavigate()
 useEffect(()=>{
  if(!uid)return;
  dispatch(fetchorderDetailsActionStart({ordersData,uid}))
  
  
 },[dataOfDetails])


const {clientType}=dataOfDetails
const btnNavEvent=()=>nav(`/orders/${dataOfDetails.uid}/${dataOfDetails.uid.slice(6)}`)

const timeStamp=dataOfDetails.date
const date=Date.now(timeStamp)
const orderDate=new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(date)

console.log(orderDate)


     return (

        
        <DetailsContainer>
             
            <h2>{`${dataOfDetails.firstName} ${dataOfDetails.lastName}`}</h2>
            <BorderDiv>
            <br/>
            <TitleContainer>
            <SpanDate>{orderDate}</SpanDate>
            <SpanPay>{dataOfDetails.paymentType}</SpanPay>
            
            </TitleContainer>

           
            <br/>
    
    <form>

        <InputForm label='First Name' type='text'  name="firstName"  disabled value={dataOfDetails.firstName}></InputForm>
        <InputForm label='Last Name' type='text'  name="lastName" disabled value={dataOfDetails.lastName}></InputForm>
        <InputForm label='Email' type='email'  name="email" disabled value={dataOfDetails.email}></InputForm>
        <InputForm label='Phone Number' type='text'  name="phone" disabled value={dataOfDetails.phone}></InputForm>
        <InputForm label='Country' type='text'  name="country" disabled value={dataOfDetails.country}></InputForm>
        <InputForm label='County' type='text'  name="county" disabled value={dataOfDetails.county}></InputForm>
        <InputForm label='City' type='text'  name="city" disabled value={dataOfDetails.city}></InputForm>
        <InputForm label='Zip Code' type='text'  name="zip" disabled value={dataOfDetails.zip}></InputForm>
        <InputForm label='Delivery Details' type='text'  name="details" disabled value={dataOfDetails.details}></InputForm>
        {clientType==='legalEntity'?<>
       <InputForm label='Company Name' type='text'  name="companyName" disabled value={dataOfDetails.companyName}></InputForm>
       <InputForm label='CUI' type='text'  name="cui" disabled value={dataOfDetails.cui}></InputForm>
       <InputForm label='IBAN' type='text'  name="iban" disabled value={dataOfDetails.iban}></InputForm>

  </>:''}

    </form>
    </BorderDiv>
    <Button typebutton='inverted' onClick={btnNavEvent}>products</Button>

    </DetailsContainer>
   
    )
}

export default OrderDeatils