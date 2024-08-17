
// src/ChatForm.js
import React, { useState } from 'react';
import axios from 'axios';

// ChatForm component to handle message input and submission
const ChatForm = ({ onNewMessage }) => {
  // State to store the input values for username and message

  const [username, setUsername] = useState(localStorage.getItem("loggedInUser"));
  const [message, setMessage] = useState('');
  // setUsername(localStorage.getItem("loggedInUser"))

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    
    
        try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
      // const response = await axios.get('https://mern-chatapp-backend-il3i.onrender.com/ok');
      // const response = await axios.get('https://mern-chatapp-backend-psi.vercel.app/ok',headers);
      const headers = {
        Authorization: token, // Ensure token is sent with Bearer prefix
      };
      // Send POST request to the backend with username and message
      const response = await axios.post('https://mern-chatapp-backend-psi.vercel.app/postchat', {
        username,
        message,
      },{headers});
      // const response = await axios.post('http://localhost:5000/postchat', {
      //   username,
      //   message,
      // },{headers});
      console.log('Response:', response.data);
      // Call the onNewMessage callback with the new message data
      onNewMessage(response.data.chatdata);
      // Clear the input fields after successful submission
      // setUsername('');
      setMessage('');

    } catch (error) {
      console.error('Error sending chat data:', error);
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>

      <div className='inputforms'>
        <div >
          <label>
            {/* <input
              type="text"
              // placeholder='enter ur name'
              className='usernameinput'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            /> */}
          </label>
        </div>
        <div >
          <label>
            <input
              type="text"
              placeholder='type ur message'
              className='massageinput'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
        </div>
      </div>

      <button type="submit" className='butt' >➤</button>
    </form>
  );
};

export default ChatForm;

