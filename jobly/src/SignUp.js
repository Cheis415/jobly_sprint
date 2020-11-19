import React, { useState, useContext } from "react";
import JoblyApi from './api';





function SignUp() {

  let initState =
  {
    username:'', 
    firstName : '', 
    lastName:'',
     email:'',
     password:'' };

  const [form, setForm] = useState(initState);

   async function handleClick(evt) {
     evt.preventDefault();
     console.log("This is it....", evt);
      let user = await document.getElementById('username').value;
      let first = await document.getElementById('firstName').value;
      let last = await document.getElementById('lastName').value;
      let em = await document.getElementById('email').value;
      let pass = await document.getElementById('password').value;

      let userData = {'username': user, 'firstName': first, 'lastName': last, 'email': em, 'password': pass}; 
      setForm(userData);
      let result = await JoblyApi.register(userData);
      console.log(result);

      return result;
    }
    let blerp = handleClick()
          if (blerp) {
            return (<div>
              <h1>YOU ARE LOGGED IN</h1>
            </div>)
          } 
      console.log(form);
  return (
    <form className="Form" name="signup">
      <h1>Registration Form</h1>
      <br />
      <label htmlFor="username"> Enter username
      <input  id="username" />
      </label>
      <br />
      <label htmlFor="firstName"> Enter first name:
      <input id="firstName" />
      </label>
      <br />
      <label htmlFor="lastName"> Enter last name:
      <input id="lastName" />
      </label>
      <br />
      <label htmlFor="email"> Enter email: 
      <input id="email" />
      </label>
      <br />
      <label htmlFor="password"> Enter password: 
      <input type="password" id="password" />
      </label>
      <br />
      <button htmlFor="signup" onClick= {handleClick}>Submit</button>
    
    </form>
  );
}

export default SignUp;