import React, { useState } from 'react'
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
const Placeorder = () => {

  const [method, setMethod] = useState('cod');

  const [fname,setfname] = useState('')
  const [lname,setlname] = useState('')
  const [email,setemail] = useState('')
  const [street,setstreet] = useState('')
  const [city,setcity] = useState('')
  const [state,setstate] = useState('')
  const [code,setcode] = useState('')
  const [country,setcountry] = useState('')
  const [phone,setphone] = useState('')

  const navigate = useNavigate();

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title title1={"DELIVERY"} title2={"INFORMATION"} />
        </div>
        <div className='flex gap-3'>
          <input onClick={(e) => setfname(e.target.value)} type="text" value={fname} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' placeholder='First name' />
          <input onClick={(e) => setlname(e.target.value)} type="text" value={lname} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' placeholder='Last name' />
        </div>
        <input onClick={(e) => setemail(e.target.value) } type="email" value={email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' placeholder='Email Address' />
        <input onClick={(e) => setstreet(e.target.value)} type="text" value={street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' placeholder='Street' />
        <div className='flex gap-3'>
          <input onClick={(e) => setcity(e.target.value)} type="text" value={city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' placeholder='City' />
          <input onClick={(e) => setstate(e.target.value) } type="text" value={state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input onClick={(e) => setcode(e.target.value)} type="number" value={code} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' placeholder='Code' />
          <input onClick={(e) => setcountry(e.target.value) } type="text" value={country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' placeholder='Country' />
        </div>
        <input onClick={(e) => setphone(e.target.value)} type="number" value={phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none' placeholder='Phone' />
      </div>

      <div className='mt-8 '>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title title1={"PAYMENT"} title2={"METHOD"} />
          <div className='flex gap-3 flex-col lg:flex-row '>
              <div onClick={() => setMethod('stripe')} className='mt-2 flex items-center gap-3 border px-3 p-2 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`} ></p>
                <img className=' h-5 mx-4' src={assets.stripe_logo} alt="" />
              </div>
              <div onClick={() => setMethod('razorpay')} className='mt-2 flex items-center gap-3 border px-3 p-2 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`} ></p>
                <img className=' h-5 mx-4' src={assets.razorpay_logo} alt="" />
              </div>
              <div onClick={() => setMethod('cod')} className='mt-2 flex items-center gap-3 border px-3 p-2 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`} ></p>
                 <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
              </div>
          </div>

        <div className='w-full text-end '>
          <button onClick={() => navigate("/myorders")} className='bg-black text-white rounded-full my-8 px-8 py-3 cursor-pointer'>PLACE ORDER</button>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Placeorder
