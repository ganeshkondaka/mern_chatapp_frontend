import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import ChatMessages from './ChatMessages';
import ChatForm from './ChatForm';

export default function Chatpage_component() {
    const [newMess, setNewMessage] = useState(null);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io('http://localhost:5000'); // Backend URL
        setSocket(newSocket);

        return () => {
            newSocket.disconnect(); // Clean up the socket connection on unmount
        };
    }, []);

    const handleNewMessage = (message) => {
        setNewMessage(message);
    };

    return (
        <div className='app'>
            <header className="App-header">
                <ChatMessages socket={socket} newMess={newMess} />
                <ChatForm socket={socket} onNewMessage={handleNewMessage} />
            </header>
        </div>
    );
}




