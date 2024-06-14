import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
function ExploreMenu({category,setCategroy}) {

  function handleCategroy(item){
    setCategroy(prev=>prev === item.menu_name?"All":item.menu_name);
    console.log(category);
  }
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delected array of dishes created with the finest ingredients and culinary expertise. Our delicious meal at a time.</p>
          <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return (
                  <div onClick={()=>handleCategroy(item)} key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} alt="" className={category === item.menu_name?"active":""}/>
                    <p>{item.menu_name}</p>
                  </div>
                )
            })}
          </div>
          <hr />
    </div>
  )
}

export default ExploreMenu