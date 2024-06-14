import React, { useState } from 'react'

import './LoginPopup.css'
import { assets } from '../../assets/assets'
export default function LoginPopup({setshowLogin}) {
  const [currState,setcurrState] = useState('Sign Up')
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>{setshowLogin(false)}} src={assets.cross_icon} alt="" />
        </div>
        <div className='login-popup-inputs'>
          {currState == 'Login'?<></>: <input type="text" placeholder='Your Name' required/>}
          <input type="email" placeholder='Your Email' required/>
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currState === 'Sign Up' ?"Create account" :"Login"}</button>
        <div className="login-popup-condition">
          <input type='checkbox' required/>
          <p>By continuing, i agree to the term of use & privacy policy</p>
        </div>
        {currState === 'Login' 
        ?<p>Create a new account ? <span onClick={()=>{setcurrState('Sign Up')}}>Click here</span></p> 
        :<p>Already have an account?<span onClick={()=>{setcurrState('Login')}}> Login In</span></p>
        }
      </form> 
    </div>
  )
}
