import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title title1={"ABOUT"} title2={"US"} />
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/3 text-gray-600'>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero asperiores qui dignissimos ea enim ad quaerat neque consequuntur laudantium ratione? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos eum, perferendis illum corporis fugit nihil nam rem reiciendis pariatur incidunt!</p>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque autem sed voluptatibus, a facere eligendi laborum dignissimos libero quas nemo dolorem obcaecati laudantium quisquam porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, inventore.</p>
          <strong className='text-gray-600 mb-[-20px]'>Our Mission</strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, mollitia. Sunt facere itaque eaque soluta.</p>
          </div>
        </div>

        <div className='text-xl py-4'>
          <Title title1={"WHY"} title2={"CHOOSE US"} />
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
            <strong>Quality Assurance</strong>
            <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aliquid qui iste quisquam repudiandae mollitia non impedit architecto placeat suscipit.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
            <strong>Convenience</strong>
            <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aliquid qui iste quisquam repudiandae mollitia non impedit architecto placeat suscipit.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
            <strong>Exceptional Customers</strong>
            <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aliquid qui iste quisquam repudiandae mollitia non impedit architecto placeat suscipit.</p>
          </div>
        </div>
        <NewsLetter />
    </div>
  )
}

export default About
