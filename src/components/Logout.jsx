import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export default function Logout() {

    const navigate = useNavigate();


    const handle_logout = (e) => {

        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        console.log("user logged out successfully")
        toast.warning("user loggedout successfully")
        setTimeout(() => {
            navigate('/login');
        }, 1000)
    }

    return (
        <div>
            <button className='logout_button' onClick={handle_logout}>logout</button>
            <ToastContainer></ToastContainer>
        </div>
    )
}
