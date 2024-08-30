import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products} = useContext(StoreContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(() => {
        const bestSeller = products.filter((item) => (item.bestseller))
        setBestSeller(bestSeller.slice(0,5));
    },[])
  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title title1={"BEST"} title2={"SELLERS"} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 mt-2'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi distinctio labore quos!
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {
        bestSeller.map((item,index) => {
            return(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            )
        })
      }
      </div>
    </div>
  )
}

export default BestSeller
