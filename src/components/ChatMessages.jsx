// src/ChatMessages.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// ChatMessages component to display chat messages
const ChatMessages = ({ newMessage }) => {
  // State to store the list of chat messages
  const [chatData, setChatData] = useState([]);

  // useEffect to fetch chat data from the backend when the component mounts
  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const response = await axios.get('https://mern-chatapp-backend-il3i.onrender.com/ok');
        setChatData(response.data.chat);
      } catch (error) {
        console.error('Error fetching chat data:', error);
      }
    };

    fetchChatData();
  }, []);

  // useEffect to update the chat data state when a new message is received
  useEffect(() => {
    if (newMessage) {
      setChatData((prevChatData) => [...prevChatData, newMessage]);
    }
  }, [newMessage]);

  return (
    <div className='body'>
      <h1 className='heading'><span style={{fontSize:"8px"}}>Ganesh's...</span>Chatapp</h1>
      <ul className='chatarea'>
        {chatData.map(chat => (
          <li key={chat._id} className='box'>
            <div className='username'>{chat.username}</div>
            <div className='message'>{chat.message}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default ChatMessages;











// // src/ChatMessages.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ChatMessages = () => {
//   const [chatData, setChatData] = useState([]);

//   useEffect(() => {
//     const fetchChatData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/ok');
//         setChatData(response.data.chat);
//         // console.log("this try block :",response)
//     } catch (error) {
//         // console.log("catchhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh :")
//         console.error('Error fetching chat data:', error);
//       }
//     };

//     fetchChatData();
//   }, []);

// //   console.log("thechat data:",chatData)

//   return (
//     <div className='body'>
//       <h1 className='heading'>Chat</h1>
//       <ul>
//         {chatData.map(chat => (
//           <li key={chat._id} className='box'>
//             <div className='username'>{chat.username}</div>
//             <div className='message'>{chat.message}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ChatMessages;
