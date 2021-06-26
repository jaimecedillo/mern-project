import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Login from "./pages/Login";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import './App.css';


function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Home />
    </div>
    </Router>
  );
}

export default App;
