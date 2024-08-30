import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { StoreContext } from '../context/ShopContext';
const Navbar = () => {
    const [visible,setVisible] = useState(false);
    const { setShowSearch,getCartCount } = useContext(StoreContext);
  return (
    <div className='flex items-center justify-between py-6 font-medium'>
       <img src={assets.logo} className='w-36' alt="H-Store" />
       <ul className='hidden sm:flex gap-5 text-sm text-gray-700 '>
          <NavLink
          to='/'
          className='flex flex-col items-center gap-1'
          >
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink
          to='/collection'
          className='flex flex-col items-center gap-1'
          >
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink
          to='/about'
          className='flex flex-col items-center gap-1'
          >
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink
          to='/contact'
          className='flex flex-col items-center gap-1'
          >
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
       </ul>
       <div className='flex items-center gap-5'>
       <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-6 cursor-pointer' alt="" />
       <div className='group relative'>
        <Link to="/login"><img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" /></Link>
        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 '>
            <div className='flex flex-col gap-2 bg-slate-100 px-5 py-3 text-gray-500 rounded w-36'>
                <p className='cursor-pointer hover:text-black'>Profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
        </div>
       </div>
       <Link to="/cart" className='relative cursor-pointer'>
       <img src={assets.cart_icon} className='w-6 cursor-pointer' alt="" />
       <div className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</div>
       </Link>
       <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-6 cursor-pointer block sm:hidden' alt="" />
       </div>

       <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full': 'w-0'}`}>
         <div className='flex flex-col text-gray-600'>
            <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3'>
                <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                <p className='text-sm '>Back</p>
            </div>
            <NavLink onClick={() => setVisible(false)} className='pl-6 py-3 border' to="/">Home</NavLink>
            <NavLink onClick={() => setVisible(false)} className='pl-6 py-3 border' to="/collection">Collection</NavLink>
            <NavLink onClick={() => setVisible(false)} className='pl-6 py-3 border' to="/about">About</NavLink>
            <NavLink onClick={() => setVisible(false)} className='pl-6 py-3 border' to="/contact">Contact</NavLink>
         </div>
       </div>
    </div>
  )
}

export default Navbar
