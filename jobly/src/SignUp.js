import React, { useState, useContext } from "react";
import JoblyApi from './api';
import { useHistory } from 'react-router-dom';





function SignUp() {

  const history = useHistory();
  const [formData, setFormData] = useState({   username:'', 
  firstName: '',
  lastName: '',
  email:'',
   password:''
});
  

async function handleSubmit(evt) {
     evt.preventDefault()

      let result = await JoblyApi.register(formData);

      if (result.success) {
        history.push('/companies');
      } else {
         alert('Invalid inputs');
      }

     JoblyApi.token = result;
    }
      
  

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  return (
    <form className="Form" name="signup" onSubmit={handleSubmit}>
      <h1>Registration Form</h1>
      <br />
      <label htmlFor="username"> Enter username
      <input  id="username" value = {formData.username} name="username" onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="firstName"> Enter first name:
      <input id="firstName" value = {formData.firstName} name="firstName" onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="lastName"> Enter last name:
      <input id="lastName" value = {formData.lastName} name="lastName" onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="email"> Enter email: 
      <input id="email" value = {formData.email} name="email" onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="password"> Enter password: 
      <input type="password" id="password" value = {formData.password} name="password" onChange={handleChange} />
      </label>
      <br />
      <button htmlFor="signup">Submit</button>
    
    </form>
  );
}

export default SignUp;