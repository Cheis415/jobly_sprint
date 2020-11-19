import React, { useState, useEffect, } from "react";
import './App.css';
import Routes from "./Routes"
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./UserContext";
import jwt from "jsonwebtoken";
export const WEB_TOKEN = "jobly-token";


function App({getLoggedIn}) {


  const [token, setToken] = useState(WEB_TOKEN);
  const [currUser, setCurrUser] = useState(null);

  async function getLoggedIn() {
    let result = await jwt.decode(token);
    if (result) {
      setToken(result);
      setCurrUser(true);
    } else {
      return alert("Invlid input, please try again");
    }
  }

  return (
    <BrowserRouter>
    <UserContext.Provider
        value={{ currUser, setCurrUser }} >
      <div className="App">
        <Nav />
        <Routes />
      
      </div>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
