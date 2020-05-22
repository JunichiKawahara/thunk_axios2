import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/presentation'
import SubPage from './components/SubPage/presentation'
import Task from './components/Task/container'
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/sub/:id" component={SubPage} />
        <Route path="/task/:id" component={Task} />
      </Router>
    </div>
  );
}

export default App;
