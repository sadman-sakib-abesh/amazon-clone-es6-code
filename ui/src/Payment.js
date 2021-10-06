import React, { useEffect, useState } from 'react';
import {db} from './firebase'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import {Link,useHistory} from 'react-router-dom'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import {CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios'


const Payment=(props) =>{

const [{basket,user},dispatch]=useStateValue()
const stripe=useStripe()
const elements=useElements()
const history=useHistory()
const [error,setError]=useState(null)
const [processing,setProcessing]=useState("")
const [disabled,setDisabled]=useState(true)
const [succeeded,setSucceeded]=useState(false)
const [clientSecret,setClientSecret]=useState(true)

useEffect(async ()=>{
await axios.post(`http://localhost:4000/payments/create?total=${getBasketTotal(basket)*100}`).then(response=>setClientSecret(response.data.clientSecret))




},[basket])



const handleSubmit=async (event)=>{
event.preventDefault()
setProcessing(true)

const payload =await stripe.confirmCardPayment(clientSecret,{
    payment_method:{
        card:elements.getElement(CardElement),
        
    }
}).then(({paymentIntent})=>{
    setSucceeded(true)
    setError(null)
    setProcessing(false)
    db.collection("users").doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
        basket:basket,
        amount:paymentIntent.amount,
        created:paymentIntent.created
    })
    history.replace('/orders')
})
}

const handleCahnge=event=>{

setDisabled(event.empty)
setError(event.error?event.error.message:"")


}




    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>Checkout (<Link to='/Checkout'>{basket?.length} items</Link>)</h1>
                
<div className='payment_section'>
<div className='payment_title'>
    <h3>Delivery Address</h3>
</div>
<div className='payment_address'>
<p>{user?.email}</p>
<p>road 3,kollyanpur</p>
<p>Dhaka,Bangladesh</p>
</div>

</div>

<div className='payment_section'>
    <div className='payment_title'>
        <h3>Review items and delivery</h3>
    </div>
    <div classname='payment_items'>
{basket.map(rec=><CheckoutProduct
    id={rec.id}
    title={rec.title}
    price={rec.price}
    img={rec.img}
    rating={rec.rating}
    />)}

    </div>
</div>

<div className='payment_section'>
<div className='payment_title'>
        <h3>Payment method</h3>
    </div>
    <div className='payment_details'>



<form onSubmit={handleSubmit}>
    <CardElement onChange={handleCahnge}/>
    <div className='payment_pricecontainer'>
    <CurrencyFormat
renderText={(value)=>(
<>
<h3>Order Total:{value}</h3>


</>

)}

decimalScale={2}
value={getBasketTotal(basket)}
displayType={"text"}
thousandSeparator={true}
prefix={"$"}


/>
<button disabled={processing || disabled || succeeded} > 
<span>{processing?<p>processing</p>:"buy now"}</span>
 </button>
    </div>
    
</form>



    </div>
</div>



            </div>
        </div>
    );
}

export default Payment ;