import React from "react";
import './App.css';
import Routes from "./Routes"
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes />
      
      </div>
    </BrowserRouter>
  );
}

export default App;
