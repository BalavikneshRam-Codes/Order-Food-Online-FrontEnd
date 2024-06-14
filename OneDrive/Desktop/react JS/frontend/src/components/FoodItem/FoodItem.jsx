import React, { useContext, useState } from 'react'

import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
export default function FoodItem({id,name,price,description,image}) {

  const {cartItems,addtoCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
          <img src={image} alt="" className='food-item-img'/>
          {
                !cartItems[id] ? <img className='add' onClick={()=>addtoCart(id)} src={assets.add_icon_white}/> : 
                <div className='food-item-counter'>
                  <img onClick ={()=>removeFromCart(id)}src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addtoCart(id)}src={assets.add_icon_green} alt="" />
                </div>
          }
        </div>
        <div className="food-item-info">
          <div className='food-item-name-rating'>
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className="food-item-desc">{description}</p>
          <p className="food-item-price">&#8377;{price}</p>
        </div>
    </div>
  )
}
