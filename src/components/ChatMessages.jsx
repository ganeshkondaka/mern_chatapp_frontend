import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import Myinsta from './Myinsta';

// ChatMessages component to display chat messages
const ChatMessages = ({ newMessage }) => {
  // State to store the list of chat messages
  const [chatData, setChatData] = useState([]);

  // Reference to the chat container element
  const chatContainerRef = useRef(null);

  // Function to fetch chat data from the backend
  const fetchChatData = async () => {
    try {
      // const response = await axios.get('https://mern-chatapp-backend-il3i.onrender.com/ok');
      const response = await axios.get('https://mern-chatapp-backend-psi.vercel.app/ok');
      setChatData(response.data.chat);
    } catch (error) {
      console.error('Error fetching chat data:', error);
    }
  };

  // useEffect to fetch chat data from the backend when the component mounts
  useEffect(() => {
    // Initial fetch
    fetchChatData();

    // Fetch chat data every 5 seconds
    const intervalId = setInterval(() => {
      fetchChatData();
    }, 10000);

    setTimeout(() => {
      clearInterval(intervalId);
      console.log("Interval cleared");
    }, 30000)

    // const stopinterval = setTimeout(() => {
    //   clearInterval(intervalId);
    //   console.log("Interval cleared");
    // }, 60000);

    // Cleanup the interval on component unmount
    return () => {clearInterval(intervalId)};
  }, []);

  // useEffect to update the chat data state when a new message is received
  useEffect(() => {
    if (newMessage) {
      setChatData((prevChatData) => [...prevChatData, newMessage]);
    }
  }, [newMessage]);

  // useEffect to scroll to the bottom of the chat container when chatData changes
  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chatData]);

  return (
    <div className='body'>
      <h1 className='heading'><span style={{ fontSize: "8px" }}>Ganesh's...</span>Chatapp
        <Myinsta></Myinsta></h1>
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
    </div>
  );
};

export default ChatMessages;
