import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import './Nav.css';
import UserContext from "./UserContext";




function Nav() {
  const obj = useContext(UserContext);
  console.log(obj)
  if (obj.currUser) {
    return (<div>
      <h1>HEEEEYYYYY</h1>
    </div>)
  }
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