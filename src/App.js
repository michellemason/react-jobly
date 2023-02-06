import React from 'react';
import './App.css';

import Routes from "./Routes";
import UserContext from './UserContext';

function App() {
  return (
    <div className="App">
      <UserContext.Provider>
        <Routes />
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
