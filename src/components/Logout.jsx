import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Logout() {

    const navigate = useNavigate();


    const handle_logout = (e) => {

        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        console.log("user logged out successfully")
        setTimeout(() => {
            navigate('/login');
        }, 1000)
    }

    return (
        <div>
            <button className='logout_button' onClick={handle_logout}>logout</button>
        </div>
    )
}
