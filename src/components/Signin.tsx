import React, { useState } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {signin} = useAuth()
    const navigate = useNavigate()


    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setError('')
        try {
            await signin(email, password)
            navigate('/fitness-site/account')
        } catch (e: any) {
            setError(e.message)
            console.log(e.message)
        }  
    }


  return (
    <div className='max-w-[700px] mx-auto my-16 p-4 text-white'>
        <div>
            <h1 className='text-2xl font-bold py-2'>Kirjaudu sisään</h1>
            <p className='py-2'>Eikö sinulla ole tiliä? <Link to='/fitness-site/signup' className='underline'> Rekisteröidy täältä.</Link></p>
        </div>
        { error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Kirjautuminen epäonnistui.</strong>
            <span className="block sm:inline"> Tarkista antamasi käyttäjätunnus ja salasana</span>
        </div>}
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Sähköposti</label>
                <input onChange={(e) => setEmail(e.target.value)}  className='border p-3 text-black' type='email'></input>
            </div>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Salasana</label>
                <input onChange={(e) => setPassword(e.target.value)}  className='border p-3 text-black' type='password'></input>
            </div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Kirjaudu sisään</button>
        </form>
    </div>
  )
}

export default Signin