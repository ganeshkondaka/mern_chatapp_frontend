import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Loadingtext from './Loadingtext';
import Logout from './Logout';

const ChatMessages = ({ newMess, socket }) => {
    const [loggedin_user, setloggedin_user] = useState('');
    const [chatData, setChatData] = useState([]);
    const [loading, setLoading] = useState(true);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        setloggedin_user(localStorage.getItem("loggedInUser"));
    }, []);

    // Function to fetch initial chat data from the backend
    const fetchChatData = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found');
            }

            const headers = { Authorization: token };
            const response = await axios.get('http://localhost:5000/ok', { headers });
            setChatData(response.data.chat);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching chat data:', error);
            setLoading(false);
        }
    };

    // useEffect to fetch chat data and set up socket listener
    useEffect(() => {
        fetchChatData();
        console.log("fetched initial chatdata")

        // Listen for new messages from the socket
        if (socket) {
            socket.on('message', (messageData) => {
                setChatData((prevChatData) => [...prevChatData, messageData]);
                console.log("new message is added 1")
            });
            console.log("new message is added 2")
        }

        return () => {
            // Clean up the socket listener when the component unmounts
            if (socket) {
                socket.off('message');
            }
        };
    }, [socket]);

    // useEffect to scroll to the bottom of the chat container when chatData changes
    useEffect(() => {
        const chatContainer = chatContainerRef.current;
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, [chatData]);

    return (
            <div className='body'>
              <h1 className='heading'>
              <span style={{ fontSize: "8px" }}>
                <img src="../static/images/sigma.jpg" alt="logo" className='facelogo' />
              </span>
              Chatt App -/^
                <Logout></Logout>
                {/* <Myinsta></Myinsta> */}
                </h1>
                {loading ? ( // Show loading component while data is being fetched
                <Loadingtext />
              ) : (
              <ul className='chatarea' ref={chatContainerRef}>
                {
                  chatData.map(chat => (
                    <li key={chat._id} className='box' id="box">
        
                      <div className='username'>{chat.username}</div>
                      <div className='message' id="message">{chat.message}</div>
                    </li>
                  ))
                }
              </ul>
              )}
            </div>
          );
        };
        
        export default ChatMessages;






























// import React, { useEffect, useState, useRef } from 'react';
// import axios from 'axios';

// import Myinsta from './Myinsta';
// import Logout from './Logout';
// import Loadingtext from './Loadingtext';
// // import { useNavigate } from 'react-router-dom';

// // ChatMessages component to display chat messages
// const ChatMessages = ({ newMessage }) => {

//   // const navigate=useNavigate();

//   // document.body.style.backgroundImage = "none"
//   const [loggedin_user, setloggedin_user] = useState('')
//   // State to store the list of chat messages
//   const [chatData, setChatData] = useState([]);
//   const [loading, setLoading] = useState(true); // State to manage loading

//   // Reference to the chat container element
//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     setloggedin_user(localStorage.getItem("loggedInUser"))
//   }, [])

//   // console.log("the loggedInUser :", loggedin_user)

//   // Function to fetch chat data from the backend
//   const fetchChatData = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('No token found');
//       }
//       // const response = await axios.get('https://mern-chatapp-backend-il3i.onrender.com/ok');
//       const headers = {
//         Authorization: token, // Ensure token is sent with Bearer prefix
//       };
      
//       // console.log("headers", headers)
//       // const tokken = localStorage.getItem('token');
//       // console.log('Tokken:', tokken);
      
//       const response = await axios.get('https://mern-chatapp-backend-psi.vercel.app/ok',{headers});
//       // const response = await axios.get("http://localhost:5000/ok", { headers });
//       setChatData(response.data.chat);
//       setLoading(false); // Ensure loading is set to false even on error
//     } catch (error) {
//       console.error('Error fetching chat data:', error);
//       setLoading(false); // Ensure loading is set to false even on error
//     }
//   };

//   // useEffect to fetch chat data from the backend when the component mounts
//   useEffect(() => {
//     // Initial fetch
//     fetchChatData();

//     // Fetch chat data every 5 seconds //rem: changed for onmount 
//     const intervalId = setInterval(() => {
//       fetchChatData();

//     }, 1000);

//     setTimeout(() => {
//       clearInterval(intervalId);
//       console.log("Interval cleared");
//     }, 2000)

//     // const stopinterval = setTimeout(() => {
//     //   clearInterval(intervalId);
//     //   console.log("Interval cleared");
//     // }, 60000);

//     // Cleanup the interval on component unmount
//     return () => { clearInterval(intervalId) };
   
//   }, []);

//   // useEffect to update the chat data state when a new message is received
//   useEffect(() => {
//     if (newMessage) {
//       setChatData((prevChatData) => [...prevChatData, newMessage]);
//     }
//   }, [newMessage]);

//   // useEffect to scroll to the bottom of the chat container when chatData changes
//   useEffect(() => {
//     const chatContainer = chatContainerRef.current;
//     if (chatContainer) {
//       chatContainer.scrollTop = chatContainer.scrollHeight;
//     }
//   }, [chatData]);

//   return (
//     <div className='body'>
//       <h1 className='heading'>
//       <span style={{ fontSize: "8px" }}>
//         <img src="../static/images/sigma.jpg" alt="logo" className='facelogo' />
//       </span>
//       Chatt App -/^
//         <Logout></Logout>
//         {/* <Myinsta></Myinsta> */}
//         </h1>
//         {loading ? ( // Show loading component while data is being fetched
//         <Loadingtext />
//       ) : (
//       <ul className='chatarea' ref={chatContainerRef}>
//         {
//           chatData.map(chat => (
//             <li key={chat._id} className='box' id="box">

//               <div className='username'>{chat.username}</div>
//               <div className='message' id="message">{chat.message}</div>
//             </li>
//           ))
//         }
//       </ul>
//       )}
//     </div>
//   );
// };

// export default ChatMessages;
