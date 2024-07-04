import React from 'react';
import Sidebar from './components/SideBar'; // Correct import path for Sidebar component
import './App.css'; // CSS file for overall styling

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <h1>Conversational Voice A.I. For Your Business</h1>
        <p className='tag-line'>Speak the future with A.I. voice assistants.</p>
      </div>
    </div>
  );
}

export default App;
