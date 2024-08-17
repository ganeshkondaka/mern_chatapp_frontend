import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Landingpage() {
  const navigate=useNavigate()    

  return (
    <div className='landing_page'>
      <h1 style={{ fontSize: '40px' }}>BOMMBAY chat </h1>
      <p> Welcome to ChatConnect! <br /> Join the conversation and connect with others.”</p>
      <div className='login_signup'>

        <button onClick={()=>{navigate('/login')}}>login</button>
        <button onClick={()=>{navigate('/signup')}}>signup</button>
      </div>
    </div>
  )
}
