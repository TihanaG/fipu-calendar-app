import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./LoginForm.css"

function LoginForm( {setUser} ) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!name || !email) return;
    setUser({ name: name, email:email })
    navigate('/dashboard')
  };

  return (
    <div className='lf-container'>
        <div className="lf-image">
          <img
            src="images/LogoFIPU.svg"
            alt="fipu logo"
          />
        </div>
        <div className="lf-form">
          <img
            src="images/fipu-calendar-logo_v3.svg"
            alt="fipu logo"
          />
          <form className='form' onSubmit={handleSubmit}>
            <h1>Welcome back</h1>
            <h4>Welcome back! Please enter your details.</h4>
            <div className='form-row'>
              <label htmlFor='name' className='form-label'>
                Name
              </label>
              <input
                type='text'
                className='form-input'
                id='name'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='form-row'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                type='email'
                className='form-input'
                id='email'
                placeholder='name@mail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type='submit' className='btn'>
              Login
            </button>
            <p className='no-account'>Don’t have an account? <b>Sign up</b></p>
          </form>
        </div>

      
    </div>
  )
}

export default LoginForm