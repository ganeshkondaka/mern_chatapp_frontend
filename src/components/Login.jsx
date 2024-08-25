import React, { useEffect, useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link,useNavigate } from 'react-router-dom';


export default function Login() {

    const navigate = useNavigate()
    
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handle_submit = async (e) => {
        e.preventDefault(); // Fix the typo
        if (!email || !password) {
            return toast.error("Insufficient data");
        }
        try {
            // const response = await axios.post("http://localhost:5000/login", { email, password });
            const response = await axios.post("https://mern-chatapp-backend-psi.vercel.app/login", { email, password });
            const { success, error, msg, jwttoken, name } = response.data;
            if (success) {
                toast.success(msg);
                localStorage.setItem('token', jwttoken);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/chatpage')
                }, 1000);
                // navigate('/chatpage')
            } else if (error) {
                console.log(error);
                toast.error(error?.details[0]?.message || "Error occurred");
            } else {
                toast.error(msg);
            }
        } catch (error) {
            toast.error(error.message || "An error occurred");
        }
    };

    return (
        <div className='loginpage'>
            <div className='logincard'>
                <form className='formm' onSubmit={handle_submit}>
                    <label className='labeltext'>Email</label>
                    <input
                        type="text"
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        required />

                    <label className='labeltext'>Password</label>
                    <input
                        type="password"
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        required />
                    <button type='submit' className='submit'  >Submit</button>
                </form>
                {/* <span>Dont have an account ?<Link to="/signup">signup</Link></span> */}
                <span className='spann'>Don't have an account ? ..<div><Link style={{color:'violet',fontSize:"20px"}} to="/signup">signup</Link></div></span>
                <ToastContainer />
            </div>
        </div>
    );
}
