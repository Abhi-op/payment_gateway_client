import React,{useState,useEffect,} from 'react';
import axios from 'axios';
import Invoice from '../component/Invoice';

const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;

function Home(props){
        const [invoices,setInvoices] = useState([]);
        const url = `${BASE_URL}/getAll`;
        
        useEffect(()=>{
                axios.get(url)
                 .then((response)=>{
                        setInvoices(response?.data)
                 })
                 .catch((error)=>{
                        console.log(error)
                 })
        },[])
        const handlePayment = async(invoiceItem)=>{
                  const url = `${BASE_URL}/${invoiceItem?.order_number}/pay`
                  try {
                        const data = {
                                purpose: 'Invoice Payment',
                                amount: invoiceItem?.subtotal+invoiceItem?.convienance_fee,
                                redirect_url:`${BASE_URL}/payment/verify?order_number=${invoiceItem?.order_number}`,
                                webhook_url: '/webhook/',
                        };
                        const response = await axios.post(url,data);
                        if(response?.status===200){
                                window.location.href = response.data;
                        }        
                        
                  } catch (error) {
                     console.log(error);   
                  }
        }
        
        return (
                <>
                <div style={{padding:"10%"}}>
                  {invoices?.map((invoiceItem)=>
                      <>
                      <Invoice key={invoiceItem?.subtotal} props={invoiceItem} handleModal={handlePayment}/>
                      </>
                 ) }
                </div>
                
                </>
        )
}

export default Home;
