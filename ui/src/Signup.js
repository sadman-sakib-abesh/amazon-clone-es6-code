import React,{useState,useeffect} from 'react';
import {Link,useHistory} from 'react-router-dom'
import {auth} from './firebase'

const Signup=(props)=> {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const history=useHistory()







//sign in
const signIn = e =>{
e.preventDefault()


auth.signInWithEmailAndPassword(email,password).then(auth=>{
    if(auth){
        history.push('/')
    }
}).catch(err=>alert(err))

}


//register
const register = e =>{
    e.preventDefault()
    
    auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
        console.log(auth)
        if(auth){
            history.push('/')
        }
    }).catch(err=>alert(err))

    
    }
    
    
    





    return (
        <div className='signup'>
          <Link to="/"><img className='signup_logo' src='https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png'/></Link>
       <div className='signup_container'>
           <h1>Sign-in</h1>

<form>
    <h5>e-mail</h5>
    <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>

    <h5>password</h5>
    <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>

    <button className='signup_signin' onClick={signIn}>Sign In</button>
</form>

<p>
By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
</p>
<button className='signup_regester' onClick={register}>Create your amazon account</button>


       </div>
       
        </div>
    );
}

export default Signup;