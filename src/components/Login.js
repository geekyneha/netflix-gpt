import React from 'react'
import { Header } from './Header'
import style from '../Css/login.module.css'
import { useState } from 'react'

const Login = () => {

    const [isSignInForm,setIsSignInForm]=useState(true);

    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }


  return (
    <div  >
    
    <Header/>
    <div >
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg" alt="" />
    </div>
   
      
    <div class={style["form-wrapper"]}>
        <h2>{ isSignInForm ? "Sign In": "Sign Up"}</h2>
        <form action="#">
            {!isSignInForm && (<div class={style["form-control"]}>
                <input type="text" required />
                <label>Name</label>
            </div>)}
            <div class={style["form-control"]}>
                <input type="text" required />
                <label>Email or phone number</label>
            </div>
            <div class={style["form-control"]}>
                <input type="password" required />
                <label>Password</label>
            </div>
            <button type="submit" >{isSignInForm ? "Sign In":"Sign Up"}</button>
            <div class={style["form-help"]}> 
                <div class={style["remember-me"]}>
                    <input type="checkbox" id="remember-me" />
                    <label for="remember-me">Remember me</label>
                </div>
                
            </div>
        </form>
        <p onClick={toggleSignInForm} >{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
        
            This page is protected by Google reCAPTCHA to ensure you're not a bot. 
            
        </div>
  

    </div>
    
  )
}

export default Login