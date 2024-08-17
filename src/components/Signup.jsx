import React, { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
  const navigate = useNavigate()

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
      // const newuser = await axios.post("http://localhost:5000/signup", user)
      const newuser = await axios.post("https://mern-chatapp-backend-psi.vercel.app/signup", user)
      toast.success("user created successfully")
      console.log("new user created :", newuser)

      setTimeout(() => {
          navigate('/login')
      }, 1000);
    } catch (error) {
      toast.error(error.response.data.msg);
      console.log("th catched error:", error.response.data.msg)
    }
  }


  return (
    <div className='signpage'>
      <div className='signcard' >
        <form className='formm' onSubmit={handlesubmit}>

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

          <button type='submit' className='submit'>submit</button>
          <span className='spann'>already have an account ? ...<div><Link style={{color:'violet',fontSize:"20px"}} to="/login">login</Link></div></span>
        </form>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  )
}
