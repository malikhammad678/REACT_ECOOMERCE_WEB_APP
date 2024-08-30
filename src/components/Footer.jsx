import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
      <div>
        <img src={assets.logo} className='mb-5 w-32' alt="" />
        <p className='w-full md:w-2/3 text-gray-600'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
      <div>
        <h3 className='text-xl font-medium mb-5'>Company</h3>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
   
      <div>
      <h3 className='text-xl font-medium mb-5'>
        Qiuck links
        </h3>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-222-333-4444</li>
            <li>hammadahmed@gmail.com</li>
            <li>Instagram</li>
        </ul>
        </div>
    </div>
  )
}

export default Footer
