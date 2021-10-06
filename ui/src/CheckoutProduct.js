import React from 'react';
import { useStateValue } from './StateProvider';



const CheckoutProduct=({id,title,img,rating,price})=>{


    const [{basket},dispatch]=useStateValue()



    const removeFromBasket=()=>{

        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })


    }

    return (
        <div className='checkoutproduct'>
            <img className='checkoutproduct_img' src={img} />


<div className='checkoutproduct_info'>
<p className='checkoutproduct_title'>{title}</p>
<p className='checkoutproduct_price'> <small>$</small>
                    <strong>{price}</strong></p>
                    <div className='checkoutproduct_ratings'>
                    {Array(rating).fill().map((_,i)=>
                    <p>⭐️</p>
                    
                    )}
                    
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
</div>

        </div>
    );
}

export default CheckoutProduct;