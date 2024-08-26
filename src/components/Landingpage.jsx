import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

export default function Landingpage() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  if (token) {
    // setTimeout(() => {
    //   navigate('/chatpage')
    // }, 1000);
    useEffect(() => {
      setTimeout(() => {
        navigate('/chatpage')
      }, 1000);
    }, [])
  }

  return (
    <div className='landing_page'>
      <h1 className='landing_head'>CHATT APP </h1>
      <p> 🙏🙏🙏 <br />Welcome to chatt app! <br /> Join the conversation and connect with others.”</p>
      <div className='login_signup'>

        <button className='land_butt' onClick={() => { navigate('/signup') }}>SIGNUP</button>
        <button className='land_butt' onClick={() => { navigate('/login') }}>LOGIN</button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  )
}
