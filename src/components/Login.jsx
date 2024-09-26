import React, { useEffect, useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import Loadingtext from './Loadingtext';


export default function Login() {

    useEffect(() => {
        document.body.style.background = "rgb(33 33 33)";
    }, [])

    const navigate = useNavigate()

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [loadingv, setloadingv] = useState(false)

    const handle_submit = async (e) => {
        e.preventDefault(); // Fix the typo
        if (!email || !password) {
            return toast.error("Insufficient data");
        }
        setloadingv(true); // Set loading to true when the request starts
        try {
            // const response = await axios.post("http://localhost:5000/login", { email, password });
            const response = await axios.post("https://mern-chatapp-backend-il3i.onrender.com/login", { email, password });
            const { success, error, msg, jwttoken, name } = response.data;
            if (success) {
                toast.success(msg);
                localStorage.setItem('token', jwttoken);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/chatpage')
                }, 1000);
                setloadingv(false)
                // navigate('/chatpage')
            } else if (error) {
                console.log(error);
                toast.error(error?.details[0]?.message || "Error occurred");
            } else {
                toast.error(msg);
            }
        } catch (error) {
            toast.error(error.message || "An error occurred");
        } finally {
            setloadingv(false); // Set loading to false after the request completes
        }
    };


    return (
        <div className='loginpage'>
            <div className='logincard'>
            {loadingv ? ( // Conditionally render the Loadingtext component
                    <Loadingtext />
                ) : (
                
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
                )}
                 {/* <span>Dont have an account ?<Link to="/signup">signup</Link></span>  */}
                <span className='spann'>Don't have an account ? ..<div><Link style={{ color: 'violet', fontSize: "20px" }} to="/signup">signup</Link></div></span>
                <ToastContainer />
            </div>
        </div>
    );
}
