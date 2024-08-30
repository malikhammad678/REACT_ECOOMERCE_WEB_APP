import React from 'react'

const NewsLetter = () => {

    const handleNewsletter = (e) => {
        e.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>
      Subscribe now & get 20% off
      </p>
      <p className='text-gray-400 mb-3'>
        Enter your email address to get exclusive offers and updates
      </p>
      <form onSubmit={handleNewsletter} className='w-full sm:w-1/2 m-auto flex items-center gap-2 border pl-3 my-6'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email'  />
        <button type='submit' className='bg-black text-white text-sm px-10 py-4 rounded-sm'>
            Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsLetter
