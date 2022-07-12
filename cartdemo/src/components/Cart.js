import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cartData = useSelector((state) => state.cartData.data)

    let totalAmount = cartData.length &&  cartData.map(item => item.price).reduce((prev , next) => {return prev + next});
    return (
        <>
            <Link to="/">Product List Page</Link>
            <h1>Cart Page</h1>
            <div className='cart-page-container'>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Category</th>
                        <th>Brand</th>
                    </tr>
                    {
                        cartData.map((item) =>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.color}</td>
                                <td>{item.category}</td>
                                <td>{item.brand}</td>
                            </tr>
                        )
                    }
                </table>
            </div>
            <div className='price-detail'>
                <div className='adjust-price'><span>Amount</span><span>{totalAmount}</span></div>
                <div className='adjust-price'><span>Discount</span><span>{totalAmount/10}</span></div>
                <div className='adjust-price'><span>Tax</span><span>000</span></div>
                <div className='adjust-price'><span>Total</span><span>{totalAmount - (totalAmount/10)}</span></div>
            </div>
        </>
    )
}

export default Cart