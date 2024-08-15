import React from 'react'
import { Link, NavLink,useNavigate } from 'react-router-dom'

export default function Landingpage() {
  const navigate=useNavigate()    
  return (
    <div className='landing_page'>
      <h1>Chat connect </h1>
      <p> Welcome to ChatConnect! <br /> Join the conversation and connect with others.”</p>
      <div className='login_signup'>
        {/* <button onClick={()=>{navigate('/login')}}>login</button> */}
        <button onClick={()=>{navigate('/signup')}}>signup</button>
      </div>
    </div>
  )
}
