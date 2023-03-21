import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div className='max-w-[700px] mx-auto my-16 p-4 text-white'>
        <div>
            <h1 className='text-2xl font-bold py-2'>Kirjaudu sisään</h1>
            <p className='py-2'>Eikö sinulla ole tiliä? <Link to='/fitness-site/signup' className='underline'> Rekisteröidy täältä.</Link></p>
        </div>
        <form>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Sähköposti</label>
                <input className='border p-3' type='email'></input>
            </div>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Salasana</label>
                <input className='border p-3' type='password'></input>
            </div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Kirjaudu sisään</button>
        </form>
    </div>
  )
}

export default Signin