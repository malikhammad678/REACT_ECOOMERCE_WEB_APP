import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products,currency,addToCart } = useContext(StoreContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [measure,setmeasure] = useState('');

  useEffect(() => {
    const fetchProductData = async () => {
      products.forEach((item) => {
        if (item._id === productId) {
          setProductData(item);
          setImage(item.image[0]);
        }
      });
    };

    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex flex-1 flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col sm:overflow-y-hidden justify-between sm:justify-normal sm:w-[18.7%] w-[24%] gap-1 '>
            {productData.image.map((item, index) => (
              <img
              onClick={() => setImage(item)}
                src={item}
                key={index}
                className='w-24% sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                alt=''
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2 '>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className='w-4 5' />
            <img src={assets.star_icon} alt="" className='w-4 5' />
            <img src={assets.star_icon} alt=""className='w-4 5' />
            <img src={assets.star_icon} alt="" className='w-4 5'/>
            <img src={assets.star_icon} alt="" className='w-4 5'/>
            <p className='pl-2'>(150)</p>
          </div>
          <p className='mt-4 font-medium text-2xl'>
          {currency} {productData.price}
          </p>
          <p className='mt-2 text-gray-500 md:w-5/6'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {
                productData.sizes.map((size, index) => {
                   return <button onClick={() => setmeasure(size)} className={`border py-2 px-4 bg-gray-200 ${size === measure ? 'border-orange-500 text-orange-500' : '' }`} key={index}>{size}</button>
                })
              }
            </div>
          </div>
          <button onClick={() => addToCart(productData._id,measure)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 rounded-3xl'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5 ' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <div className='flex'>
          <div className='border px-5 py-3 text-sm bg-gray-200'>Product detail</div>
          <div className='border px-5 py-3 text-sm'>Testimonials (150)</div>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 '>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum esse magni maiores reiciendis, asperiores quidem suscipit, quis ut at necessitatibus odio autem accusantium, hic nisi sed doloremque reprehenderit consectetur ratione culpa? Veritatis velit tempore facere voluptatibus doloribus hic, necessitatibus totam aperiam itaque, consequuntur corrupti quaerat rem labore, quidem soluta vel qui quos libero iste expedita quam cumque maiores? Voluptate nihil error illum, explicabo perferendis omnis nostrum rerum repudiandae exercitationem, assumenda atque a obcaecati est fugit aliquid architecto id recusandae, quibusdam reprehenderit nulla dicta excepturi. Quam, exercitationem quibusdam officia optio quisquam culpa quas. A dolore neque dolores aut assumenda minus dolorem.</p>
        </div>
      </div>
      <RelatedProducts Category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;
