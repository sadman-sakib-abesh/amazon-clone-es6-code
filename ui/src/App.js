import { useEffect } from 'react';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

/**this are components */
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import Orders from'./Orders'
import Signup from './Signup';
import {auth} from './firebase'
import Payment from './Payment'
/**this are components */



import './App.css';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import { useStateValue } from './StateProvider';




const promise=loadStripe('pk_test_51JVDNuAqoKgnL4BKgXmhB3YwminHU7vJyv1A49IE238RWzJpBkhpNujCKGqY2SqVe1FC8hKXXRpaYfQKuzUDTnk600pRhvPRwd')



const App=()=> {
const [{basket,user},dispatch]=useStateValue()

useEffect(()=>{

auth.onAuthStateChanged(authUser=>{
  if(authUser){
dispatch({
type:'SET_USER',
user:authUser

})
  }else{

    dispatch({
      type:'SET_USER',
      user:null
      
      })

  }
})


},[])







  return (
    <div className="App">
      <Router>
<Switch>
<Route exact path='/'>
<Header/>
<Home/>
</Route>

<Route path='/Checkout'>
<Header/>
<Checkout/>
</Route>

<Route path='/orders'>
<Header/>
<Orders/>
</Route>


<Route path='/Payment'>
<Header/>
<Elements stripe={promise}>
<Payment/>
</Elements>
</Route>


<Route path='/Signup'>

<Signup/>
</Route>


</Switch>



</Router>
    </div>
  );
}

export default App;
