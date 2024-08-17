import React, { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate()

export default function Login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handle_submit = async (e) => {
        e.preventDefault(); // Fix the typo
        if (!email || !password) {
            return toast.error("Insufficient data");
        }
        try {
            const response = await axios.post("http://localhost:5000/login", { email, password });
            const { success, error, msg, jwttoken, name } = response.data;
            if (success) {
                toast.success(msg);
                localStorage.setItem('token', jwttoken);
                localStorage.setItem('loggedInUser', name);
                // setTimeout(() => {
                //     navigate('/chatpage')
                // }, 1000);
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
        <div>
            <form onSubmit={handle_submit}>
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
                <button type='submit'>Submit</button>
            </form>
            <ToastContainer />
        </div>
    );
}







// import React, { useState } from 'react'
// import axios from "axios"
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// // import { useNavigate } from 'react-router-dom';

// // const navigate = useNavigate()

// export default function Login() {
//     const [email, setemail] = useState("")
//     const [password, setpassword] = useState("")

//     const user = {
//         email,
//         password
//     }

//     const handle_submit = async (e) => {
//         e.preventDefault();
//         if (!email || !password) {
//             return toast.error("insufficient data")
//         }
//         try {
//             const response = await axios.post("http://localhost:5000/login", user)
//             const result = await response.json();
//             const { success, error, msg, jwttoken, name } = result;
//             if (success) {
//                 toast.success(msg)
//                 localStorage.setItem('token', jwttoken);
//                 localStorage.setItem('loggedInUser', name);
//                 // setTimeout(() => {
//                 //     navigate('/chatpage')
//                 // }, 1000);
//             } else if (error) {
//                 console.log(error)
//                 toast.error(error?.details[0].message)
//             } else if (!success) {
//                 toast.error(msg)
//             }
//         } catch (error) {
//             toast.error(error)
//         }


//     }
//     return (
//         <div>
//             <form onSubmit={handle_submit}>
//                 <label className='labeltext'>Email</label>
//                 <input
//                     type="text"
//                     placeholder='emter email'
//                     value={email}
//                     onChange={(e) => setemail(e.target.value)}
//                     required />

//                 <label className='labeltext'>Password</label>
//                 <input
//                     type="text"
//                     placeholder='emter password'
//                     value={password}
//                     onChange={(e) => setpassword(e.target.value)}
//                     required />
//                 <button type='submit'>submit</button>

//             </form>
//             <ToastContainer></ToastContainer>

//         </div>
//     )
// }
