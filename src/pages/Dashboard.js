import React from 'react'

export const Dashboard = ({ user }) => {
  return (
    <section className='section'>
        <h4>Hello, {user?.name}</h4>
    </section>
  )
}
