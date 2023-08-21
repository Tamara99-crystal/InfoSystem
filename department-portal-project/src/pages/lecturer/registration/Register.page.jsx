import React, { useState } from 'react'
import axios from 'axios';
import './register.page.css'
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    role: 'lecturer' //default
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/auth/signup', formData);
      console.log('API response:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
    setFormData(
      {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        role: 'lecturer' //default
      }
    )
  };


  return (
    <div className='reg-container'>
      
      <form onSubmit={handleSubmit}>
        <h1>Register(Staff/classrep)</h1><br></br>
        <label>First Name:</label><br></br>
        <input 
          type='text' 
          name='firstname'
          value={formData.firstname}
          onChange={handleChange}
          placeholder='enter your firstname'
          /><br></br>

        <label>Last Name:</label><br></br>
        <input
          type='text' 
          placeholder='enter your lastname'
          name='lastname'
          value={formData.lastname}
          onChange={handleChange}
          
          /><br></br>

        <label>Username(reg No):</label><br></br>
        <input 
          type='text' 
          placeholder='enter a username'
          name='username'
          value={formData.username}
          onChange={handleChange}
          /><br></br>

       

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
          <div className='radio-container'>
            <div className='radio1'>
              <label>Lecturer</label>
              <input
                type='radio'
                name='role'
                value='lecturer'
                checked={formData.role === 'lecturer'}
                onChange={handleChange}
              />

            </div>
            <div className='radio2'>
              <label>Class Rep</label>
              <input
                type='radio'
                name='role'
                value='classrep'
                checked={formData.role === 'classrep'}
                onChange={handleChange}
              />
            </div>
            
          </div>
          <p>Already have an account? <Link to='/lecturer/login' className='login-link'>Login</Link></p>
        
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register
