import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/hexa.png';

const Header = () => {
  const result = useSelector((state) => state.cartData.data)

  return (
    <>
      <div className='header'>
        <Link to="/">
          <img width={"30%"} src={logoImg} alt="" />
        </Link>
        <div className='cart-div'>
          <Link to="/cart">
            <span>{result.length}</span>
            <img src='https://img.icons8.com/ios-glyphs/344/clear-shopping-cart.png' alt='' />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header