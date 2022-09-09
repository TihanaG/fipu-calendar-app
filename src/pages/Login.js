import React from 'react'
import LoginForm from '../components/LoginForm'

function Login( {setUser} ) {
  return (
    <div className='login'>
      <LoginForm setUser={setUser} />
    </div>
  )
}

export default Login