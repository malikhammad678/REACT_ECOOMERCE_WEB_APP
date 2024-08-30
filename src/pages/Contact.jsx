import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'
const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title title1={"CONTACT"} title2={"US"} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex justify-center flex-col items-start  gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Faisalabad, Punjab, Pakistan <br />Asia, Pakistan</p>
          <p className='text-gray-500'>Tel: (123) - 456 - 789 <br /> Email: hammadahmed20004@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at H-STORE</p>
          <p className='text-gray-500'>Learn more about terms & jobs</p>
          <button className='bg-black text-white px-8 py-4 rounded-full cursor-pointer'>Explore jobs</button>
        </div>
      </div>
      <NewsLetter />
    </div>
  )
}

export default Contact
