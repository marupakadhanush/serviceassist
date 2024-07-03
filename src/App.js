import React from 'react';
import Sidebar from './components/SideBar';
import './App.css'; // CSS file for overall styling

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        
        <h1>Welcome to the Main Content Area</h1>
        <p>This is where your main content will be displayed.</p>
      </div>
    </div>
  );
}

export default App;
