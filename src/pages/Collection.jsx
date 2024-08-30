import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products,search, Showsearch} = useContext(StoreContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filteredProducts,setFilteredProducts] = useState([]);
  const [Category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortByPr,setsortByPr] = useState("relevant")

  const toggleCategory = (e) => {
    if(Category.includes(e.target.value)){
      setCategory(Category.filter(item => item !== e.target.value));
    }else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
     setSubCategory(prev => prev.filter(item => item !== e.target.value));
  }else{
    setSubCategory(prev => [...prev,e.target.value])
  }
}


const applyFilter = () => {
  let productCopy = products.slice()

  if(Showsearch && search) {
    productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  }

  if(Category.length > 0) {
    productCopy = productCopy.filter(item => Category.includes(item.category))
  }

  if(subCategory.length > 0){
    productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
  }

  setFilteredProducts(productCopy);

}

const sortProduct = () => {
  let productCopy = filteredProducts.slice()
  switch(sortByPr){
    case 'low-high':
      setFilteredProducts(productCopy.sort((a,b) => a.price - b.price))
      break;
    case 'high-low':
      setFilteredProducts(productCopy.sort((a,b) => b.price - a.price))
      break;
    default:
      applyFilter();
      break;
  }
}

  useEffect(() => {
    setFilteredProducts(products);
  },[products]);

  useEffect(() => {
    applyFilter();
  },[Category,subCategory,search,Showsearch])

  useEffect(() => {
    sortProduct();
  },[sortByPr])


  
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t pt-10'>
      <div className="min-w-15">
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90': ''}`} alt="" />
        </p>
        <div className={`border border-gray-300 pl-5 pr-7 py-3 mt-6 ${showFilter ? 'block' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
             <p className='flex gap-2'>
              <input type="checkbox" className='w-3'  value={'Men'} onChange={toggleCategory}  /> Men
             </p>
             <p className='flex gap-2'>
              <input type="checkbox" className='w-3'  value={'Women'} onChange={toggleCategory}  /> Women
             </p>
             <p className='flex gap-2'>
              <input type="checkbox" className='w-3'  value={'Kids'} onChange={toggleCategory}  /> Kids
             </p>
          </div>
        </div>

        <div className={`border border-gray-300 pl-5 pr-7 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
             <p className='flex gap-2'>
              <input type="checkbox" className='w-3'  value={'Topwear'}  onChange={toggleSubCategory}  /> Topwear
             </p>
             <p className='flex gap-2'>
              <input type="checkbox" className='w-3'  value={'Bottomwear'} onChange={toggleSubCategory}  /> Bottomwear
             </p>
             <p className='flex gap-2'>
              <input type="checkbox" className='w-3'  value={'Winterwear'} onChange={toggleSubCategory}  /> Winterwear
             </p>
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
        <Title title1={"All"} title2={"Collections"} />
        <select onChange={(e) => setsortByPr(e.target.value)} className='border-2 border-gray-300 text-sm px-2 outline-none'>
          <option value="relevant">Relevant</option>
          <option value="low-high">Low to high</option>
          <option value="high-low">High to low</option>
        </select>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
           filteredProducts.map((item,index) => {
            return (
              <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            )
           }) 
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
