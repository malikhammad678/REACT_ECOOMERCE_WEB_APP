import React, { useContext } from 'react'
import { StoreContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
    const {getTotalAmmount,currency,delivery_fee} = useContext(StoreContext);
  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title title1={"CART"} title2={"TOTAL"} />
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm '>
        <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>{currency} {getTotalAmmount()}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <p>Delivery Fee</p>
            <p>{currency} {getTotalAmmount() === 0 ? 0 : delivery_fee}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <p className='font-bold'>Total</p>
            <p className='font-bold'>{currency} {getTotalAmmount() === 0 ? 0 : getTotalAmmount() + delivery_fee}.00</p>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
