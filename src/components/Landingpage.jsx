import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Landingpage() {
  const navigate=useNavigate()    

  return (
    <div className='landing_page'>
      <h1 style={{ fontSize: '40px' }}>BOMMBAY chat </h1>
      <p> Swagatham... <br />Welcome to bommbay chat! <br /> Join the conversation and connect with others.”</p>
      <div className='login_signup'>

        <button onClick={()=>{navigate('/signup')}}>signup</button>
        <button onClick={()=>{navigate('/login')}}>login</button>
      </div>
    </div>
  )
}
