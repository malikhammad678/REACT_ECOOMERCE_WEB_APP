import React, { useState } from 'react'

const Login = () => {

  const [currentSate,setCurrentState] = useState('Sign Up');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center w-[90%] m-auto sm:max-w-96 mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
      <p className='prata-regular text-3xl'>{currentSate}</p>
      <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
     {
      currentSate === 'Sign Up' ?  <input type="text" className='w-full px-3 py-2 border border-gray-800 outline-none' placeholder='Name' /> : null
     }
      <input type="email" className='w-full px-3 py-2 border border-gray-800 outline-none' placeholder='Email' />
      <input type="password" className='w-full px-3 py-2 border border-gray-800 outline-none' placeholder='Password' />
      <div className='w-full flex justify-between text-sm mt-[-8px] '>
        {currentSate === 'Login' ? <p className='cursor-pointer font-medium'>Forget your password?</p> : null } 

        {
          currentSate === 'Sign Up' ? <p onClick={() => setCurrentState("Login")} className='cursor-pointer font-medium'>Already have an account?</p>: <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer font-medium'>Don't have an account?</p>
        }
      </div>
      <button className='bg-black text-white mt-2 px-8 py-3 cursor-pointer rounded-sm'>{currentSate === 'Sign Up' ? 'Sign Up' : 'Login'}</button>
    </form> 
  )
}

export default Login
