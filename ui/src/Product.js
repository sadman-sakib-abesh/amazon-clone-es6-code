import React from 'react';
import { useStateValue } from './StateProvider';

const Product=({id,title,img,rating,price})=> {

const [{basket},dispatch]=useStateValue()




    const addToBasket=()=>{
dispatch({
type:'ADD_TO_BASKET',
item:{
    id:id,
    title:title,
    img:img,
    price:price,
    rating:rating
}
})
    }






    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_ratings'>
                    {Array(rating).fill().map((_,i)=>
                    <p>⭐️</p>
                    
                    )}
                    
                </div>
              <img src={img}
              alt=''
              />

        <center> <button onClick={addToBasket} >Add to basket</button></center>

            </div>
        </div>
    );
}

export default Product;