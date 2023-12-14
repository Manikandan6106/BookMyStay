import React from 'react';
import './register.css';

function Register() {
  return (
    
    <div className='reg'>
      <label htmlFor="user"><h1>REGISTRATION FORM</h1></label>
      <label htmlFor="user">First Name</label>
      <input type="text" id="user" name="user" placeholder="" />
      <br />
      <label htmlFor="user">Last Name</label>
      <input type="text" id="user" name="user" placeholder="" />
      <br />
      <label htmlFor="dob">D.O.B:</label>
      <input type="date" id="dob" required />
      <br />
      <label htmlFor="email">E-mail:</label>
      <input type="email" id="email" placeholder="" required />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" placeholder="" />
      <label htmlFor="password">Confirm Password:</label>
      <input type="password" id="password" name="password" placeholder="" />
      <br />
      <br />
      
      <br />
      <center><button>SIGN UP</button></center>
    </div>
  );
}

export default Register;