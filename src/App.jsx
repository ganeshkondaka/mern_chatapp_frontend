import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div >
      <Outlet></Outlet>
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
