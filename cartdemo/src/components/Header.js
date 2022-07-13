import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/hexa.png';

const Header = (props) => {
  const result = useSelector((state) => state.cartData.data)

  console.log("resulttttt", result);

  const changeHandler = (e) => {
    props.dataValue(e.target.value)
  }

  return (
    <>
      <div className='header'>
        <Link style={{width : "7%"}} to="/">
          <img width={"90%"} src={logoImg} alt="" />
        </Link>
        {
          props.cartProp ? null :  <input type="text" class="form-control searchInput"   placeholder="Search Hear....." name='inputText'  onChange={changeHandler} />
        }
       
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