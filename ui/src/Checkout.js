import React from 'react';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';


const Checkout=(props) =>{

    const [{basket,user},dispatch]=useStateValue()

    return (
        <div className='checkout'>
        <div className='checkout_left'>
            <img src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg'
            className='checkout_ad'
            alt=''/>

<div>
  <h3>Hello,<br/> {user?.email}</h3>
    <h2 className='checkout_title'>your shopping basket</h2>
  {basket.map(rec=>
  
  <CheckoutProduct
    id={rec.id}
    title={rec.title}
    price={rec.price}
    img={rec.img}
    rating={rec.rating}
    />)
  }

    

</div>



        </div>

        <div className='checkout_right'>
        
            <Subtotal/>
        </div>

        </div>
    );
}

export default Checkout ;