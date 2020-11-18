import React from "react";
import { Link } from "react-router-dom";



function Nav() {
  return (
    
       <ul >
          <li className="nav-item mr-4">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item mr-4">
            <Link className="nav-link" to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
  );
}

export default Nav;