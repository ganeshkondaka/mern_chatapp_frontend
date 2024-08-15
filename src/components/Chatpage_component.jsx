
import React from 'react'
import { useState } from 'react';
import ChatMessages from './ChatMessages';
import ChatForm from './ChatForm';
import Modechange from './Modechange';


export default function Chatpage_component() {
    // State to store the new message
    const [newMessage, setNewMessage] = useState(null);

    // Callback function to update the new message state
    const handleNewMessage = (message) => {
        setNewMessage(message);
    };

    return (
        <div className='app'>
            <Modechange></Modechange>
            
            <header className="App-header">
                <ChatMessages newMessage={newMessage} /> {/* Pass the newMessage state to ChatMessages */}
                <ChatForm onNewMessage={handleNewMessage} /> {/* Pass the handleNewMessage function to ChatForm */}
            </header>
        </div>
    )
}
