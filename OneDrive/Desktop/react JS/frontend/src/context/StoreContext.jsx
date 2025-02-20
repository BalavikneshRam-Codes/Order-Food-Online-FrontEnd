import { createContext, useEffect, useState } from "react";

import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvideer = (props) => {

  const [cartItems, setCartItem] = useState({});
  const addtoCart = (itemid) => {
    if (!cartItems[itemid]) {
      setCartItem(prev => ({ ...prev, [itemid]: 1 }))
    } else {
      setCartItem(prev => ({ ...prev, [itemid]: prev[itemid] + 1 }))
    }
  }

  const removeFromCart = (itemId) => {
    setCartItem(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  // useEffect(()=>{
  //   console.log(cartItems)
  // },[cartItems])

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item)
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  }

  const contextValue = {
    food_list,
    cartItems,
    addtoCart,
    removeFromCart,
    getTotalCartAmount
  }
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}


export default StoreContextProvideer