import React, { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate()


export default function Signup() {
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const user = {
    username,
    email,
    password
  }

  const handlesubmit = async (e) => {
    e.preventDefault();// Prevent the default form submission behavior
    if (!username || !email || !password) {
      return toast.error("insufficient data")
    }
    try {
      const newuser = await axios.post("http://localhost:5000/signup", user)
      // setTimeout(() => {
      //   navigate('/chatpage')
      // }, 1000);
      toast.success("user created successfully")
      console.log("new user created :", newuser)
    } catch (error) {
      toast.error(error.response.data.msg);
      console.log("th catched error:", error.response.data.msg)
    }
  }


  return (
    <div className='signcard' >
      <form onSubmit={handlesubmit}>

        <label className='labeltext'>username</label>
        <input
          type="text"
          placeholder='username'
          value={username}
          onChange={(e) => setusername(e.target.value)}
          required
        />

        <label className='labeltext'>email</label>
        <input
          type="text"
          placeholder='email'
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
        />

        <label className='labeltext'>password</label>
        <input
          type="text"
          placeholder='password'
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          required
        />

        <button type='submit'>submit</button>

      </form>
      <ToastContainer></ToastContainer>
    </div>
  )
}
