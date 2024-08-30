import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const {search,setSearch,Showsearch,setShowSearch} = useContext(StoreContext);
    const location  = useLocation();
    const [visible,setVisible] = useState(false);

    useEffect(() => {
        if(location.pathname.includes('collection')){
           setVisible(true)
        }
        else {
           setVisible(false)
        }
    },[location])
  return Showsearch && visible ?  (
    <div className='border-t border-b bg-gray-50 text-center  '>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
       <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search...' className='flex-1 bg-inherit text-sm outline-none' />
       <img src={assets.search_icon} className='w-4' alt="" />
      </div>
      <img onClick={() => setShowSearch(false)} src={assets.cross_icon} className='inline w-3 cursor-pointer' alt="" />
    </div>
  ) : null
}

export default SearchBar
