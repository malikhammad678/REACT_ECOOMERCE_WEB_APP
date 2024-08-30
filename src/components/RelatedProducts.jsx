import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';

const RelatedProducts = ({Category,subCategory}) => {
    const {products} = useContext(StoreContext);
    const [related,setRelated] = useState([]);

    useEffect(() => {
     if(products.length > 0) {
        let productCopy = products.slice();
        productCopy = productCopy.filter(product => product.category === Category && product.subCategory === subCategory)

        setRelated(productCopy.slice(0,5));
     }
    },[products])
  return (
    <div className='mt-20'>
        <div className='text-center text-3xl py-8'>
            <Title title1={"Related"} title2={"Products"} />
        </div>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {
        related.map((item, index) => {
            return (
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            )
        })
      }
    </div>
    </div>
  )
}

export default RelatedProducts
