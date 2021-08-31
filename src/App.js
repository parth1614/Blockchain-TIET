import React from 'react';
import Navbar from './components/Navbar/index';
import Sidebar from './components/Sidebar/index.js';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <Router>
    <Home />
    </Router>
  );
}

export default App;
