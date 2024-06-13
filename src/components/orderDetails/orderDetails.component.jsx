import InputForm from "../input-form/input-form.component"
import { useDispatch, useSelector } from "react-redux"
import { DetailsContainer,SpanDate,SpanPay ,TitleContainer,BorderDiv} from "./orderDetails.styles"
import Button from "../button/button.component"
import { useNavigate } from "react-router"
import { useParams } from "react-router"
import { useEffect, useState} from "react"

import { detailsDataSelect,ordersDataSelect} from "../../store/orders/orders-selectors"
import { fetchorderDetailsActionStart } from "../../store/orders/orders-actions"
import { getTimeDate } from "../../assets/formatDBdate"

const OrderDeatils=()=>{
   const {orders:uid}=useParams()
  const ordersData=useSelector(ordersDataSelect)
  const dataDetails=useSelector(detailsDataSelect)
 const dispatch=useDispatch()
 const[dataOfDetails,setDataOfDetails]=useState({})


 const nav=useNavigate()
 useEffect(()=>{
  if(!uid)return;
  dispatch(fetchorderDetailsActionStart({ordersData,uid}))
  
  
 },[dataDetails,ordersData])

 useEffect(()=>{
  const getData=async()=>{
   const details= await dataDetails
   setDataOfDetails(details)

  }
  getData()

 },[dataDetails,ordersData])
 if(!dataOfDetails.total)return

const {clientType}=dataOfDetails
const btnNavEvent=()=>nav(`/orders/${dataOfDetails.uid}/${dataOfDetails.uid.slice(6)}`)








     return (

        
        <DetailsContainer>
             
            <h2>{`${dataOfDetails.firstName} ${dataOfDetails.lastName}`}</h2>
            <BorderDiv>
            <br/>
            <TitleContainer>
            <SpanDate>{getTimeDate(dataOfDetails.date)}</SpanDate>
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

    <Button typebutton='inverted' onClick={btnNavEvent}>products</Button>
    </BorderDiv>
    </DetailsContainer>
   
    )
  
}

export default OrderDeatils