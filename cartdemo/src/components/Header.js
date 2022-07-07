import React from 'react'
import {useSelector} from 'react-redux'
const Header = () => {
    const result = useSelector((state) => state.cartData.data)
    console.log("da+++++++",result);
  return (
    <>
    <div className='header'>
    <div className='cart-div'>
        <span>{result.length}</span>
        <img src='https://img.icons8.com/ios-glyphs/344/clear-shopping-cart.png' alt=''/>
    </div>
    </div>
    </>
  )
}

export default Header