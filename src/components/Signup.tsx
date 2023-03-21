import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    // const {signup} = useAuth()


    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setError('')
        try {
            // await signup(email, password)
        } catch (e: any) {
            setError(e.message)
            console.log(e.message)
        }  
    }

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
        <div>
            <h1 className='text-2xl font-bold py-2'>Rekisteröidy</h1>
            <p className='py-2'>Eikö sinulla ole tiliä? <Link to='/fitness-site/' className='underline'> Rekisteröidy täältä.</Link></p>
        </div>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Sähköposti</label>
                <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type='email'></input>
            </div>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Salasana</label>
                <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password'></input>
            </div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Rekisteröidy</button>
        </form>
    </div>
  )
}

export default Signup