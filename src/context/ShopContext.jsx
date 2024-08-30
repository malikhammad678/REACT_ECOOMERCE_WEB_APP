import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const StoreContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;

  const [search,setSearch] = useState('');
  const [Showsearch,setShowSearch] = useState(false);
  const [cartItem,setCartItem] = useState({});

  const addToCart = (itemId,size) => {

     if(!size){
      toast.error("Size is required!")
      return
     }
    let cartData = structuredClone(cartItem);
    if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size] += 1;
        toast.success("Product Added")
      }else{
        cartData[itemId][size] = 1;
        toast.success("Product Added")
      }
      
    }else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
      toast.success("Product Added")
    }
    setCartItem(cartData);
  }

  const getTotalAmmount = () => {
    let total = 0;
    for(const items in cartItem){
      const productsItem = products.find((product) => product._id === items)
      for(const item in cartItem[items]){
        if(cartItem[items][item]){
          total += productsItem.price * cartItem[items][item]
        }
      }
    }
    return total;
  }

  const getCartCount = () => {
    let count = 0;
    for(const items in cartItem){
      for(const item in cartItem[items]){
       
          if(cartItem[items][item] > 0){
            count += cartItem[items][item];
          }
       
      }
    }
    return count;
  }

  const updateData = (itemId,size,quantity) => {
    let cartData = structuredClone(cartItem);
    cartData[itemId][size] = quantity
    setCartItem(cartData);
  }


  const value = {
    products,
    currency,
    delivery_fee,
    search,setSearch,Showsearch,setShowSearch,
    cartItem,addToCart,getCartCount,updateData,getTotalAmmount
  };

  

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
};

export default ShopContextProvider;
