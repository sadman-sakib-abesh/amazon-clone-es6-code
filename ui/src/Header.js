import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


const Header =()=>{
    const [{basket,user},dispatch]=useStateValue()
    


const handleAuth=()=>{
    if(user){
auth.signOut()

    }
}

        return (
            <div className='header'>

<Link className='link' to='/'><img className='header_logo' alt='' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/></Link>
              
              <div className='header_search'>

<input type='text' className='header_searchIn'/>
<SearchIcon className='header_searchIcon'/>
              </div>


              <div className='header_nav'>
                 
                 
              <div onClick={handleAuth} className='header_direct'>

<span className='header_directinone'>
    Hello {!user?"guest":user.email}
</span>
 
<span className='header_directintwo'>
{user?<>Sign out</>:<Link className='link' to='/Signup'><>Sign in</></Link>}
</span>
  </div>


                  <div className='header_direct'>
                  <span className='header_directinone'>
                  Returns
</span>
<span className='header_directintwo'>

<Link className='link' to='/orders'>Orders</Link>
</span>
                  </div>
                  <div className='header_direct'>
                  <span className='header_directinone'>
                  Your
</span>
<span className='header_directintwo'>
Prime
</span>
                  </div>

                  
                  <div className='header_optionbasket'>
                  <Link className='link' to='/Checkout'> <ShoppingBasketIcon/></Link>
                  <span className='header_directintwo header_basketcount '>{basket?.length}</span>
                  
                  </div>

              </div>

            </div>
        );
    
}

export default Header;