import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css';


function Nav() {
  return (
    
       <ul className = "navbar" >
          
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          
           <NavLink className="nav-link" to="/signup">
              Sign Up
            </NavLink>
          
            
            <NavLink className="nav-link" to="/companies">
              Companies
            </NavLink>
        

            
            <NavLink className="nav-link" to="/jobs">
              Jobs
            </NavLink>
        
 
            <NavLink className="nav-link" to="profile">
              Profile
            </NavLink>
      


        </ul>
  );
}

export default Nav;