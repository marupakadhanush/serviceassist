import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/SideBar';
import ForBusiness from './components/ForBusiness';
import './App.css';
import CreateAgent from './components/CreateAgent';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Switch>
            <Route path="/create-agent" component={CreateAgent} />
            <Route path='/forBusiness' component={ForBusiness} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
