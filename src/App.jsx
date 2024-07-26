// src/App.js
import React, { useState } from 'react';
import ChatMessages from './components/ChatMessages';
import ChatForm from './components/ChatForm';
import Modechange from './components/Modechange';
import Myinsta from './components/Myinsta';

function App() {
  // State to store the new message
  const [newMessage, setNewMessage] = useState(null);

  // Callback function to update the new message state
  const handleNewMessage = (message) => {
    setNewMessage(message);
  };

  return (
    <div className="App">
      {/* <Myinsta></Myinsta> */}
      <Modechange />
      <header className="App-header">

        {/* Pass the newMessage state to ChatMessages */}
        <ChatMessages newMessage={newMessage} />

        {/* Pass the handleNewMessage function to ChatForm */}
        <ChatForm onNewMessage={handleNewMessage} />

      </header>


    </div>
  );
}

export default App;
















// // src/App.js
// import React from 'react';
// import ChatMessages from './components/ChatMessages';
// import ChatForm from './components/ChatForm';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <ChatMessages />
//         <ChatForm/>
//       </header>
//     </div>
//   );
// }

// export default App;
