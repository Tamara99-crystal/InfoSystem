import React, { useState } from 'react'
import axios from 'axios';
import './login.page.css'
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3001/auth/signup', formData);
      console.log('API response:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
    setFormData(
      {
        email: '',
        password: ''
      }
    )
  };


  return (
    <div className='login-container'>
      
      <form onSubmit={handleSubmit}>
        <h1>Login(Staff/classrep)</h1><br></br>
        

        <label>Email:</label><br></br>
        <input 
          type='email' 
          placeholder='enter your email address'
          name='email'
          value={formData.email}
          onChange={handleChange}
          /><br></br>

        <label>Password:</label><br></br>
        <input 
          type='password' 
          placeholder='enter your password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          
          /><br></br>
          
          <p>Don't have an account? <Link to='/lecturer/register' className='register-link'>Register</Link></p>
        
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
