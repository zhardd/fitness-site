import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'



const Account = () => {
  const [error, setError] = useState('')
  const {currentUser, logout} = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setError('')
    try {
      await logout()
      navigate('/fitness-site/')
    } catch (error) {
      setError('Ulos kirjautuminen epäonnistui')
    }
  }

  return (
    <div className='max-w-[600px] mx-auto my-16 p-4 text-white'>
      <h1 className='text-2xl font-bold py-4'>Tili</h1>
      <p><strong>Käyttäjän sähköposti:</strong> {currentUser && currentUser.email}</p>
      <button onClick={handleLogout} className='border px-6 py-2 my-4'>Kirjaudu ulos</button>
    </div>
  )
}

export default Account