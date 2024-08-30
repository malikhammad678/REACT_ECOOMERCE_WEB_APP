import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {products, cartItem, currency,updateData} = useContext(StoreContext);

  const navigate = useNavigate();

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          })
        }
      }
    }
    setCartData(tempData);
  }, [cartItem]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title title1={"YOUR"} title2={"CART"} />
      </div>

      <div className=''>
        {
          cartData.map((item, index) => {
           
            const productData = products.filter(product => product._id === item._id)[0]; 
            
            
            if (!productData) return null;

            return (
              <div key={item._id} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-center gap-6'>
                  <img src={productData.image[0]} className='w-16 sm:w-20' alt={productData.name} />
                  <div>
                    <p className='text-sm sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency} {productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50 '>SIZE: {item.size}</p>
                    </div>
                  </div>
                </div>
                <input
                onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateData(item._id,item.size,Number(e.target.value))}
                className='border mx-w-10 sm:max-w-20 px-1 sm:px-2 py-1 outline-none ' type="number" min={1} defaultValue={item.quantity} />
                <img onClick={() => updateData(item._id,item.size,0)} src={assets.bin_icon} className='w-5 cursor-pointer' alt="" />
              </div>
            );
          })
        }
      </div>
      <div className='flex justify-end my-20'>

        <div className='w-full sm:w-[450px]'>
      <CartTotal />
      <div className='w-full text-end'>
        <button onClick={ cartData.length > 0 ? () => navigate("/placeorder") : () => navigate("/cart")} className='bg-black text-white rounded-full my-8 px-8 py-3 cursor-pointer'>PROCEED TO CHECK OUT</button>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Cart;
