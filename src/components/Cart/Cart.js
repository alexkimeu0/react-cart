import React from 'react'
import './Cart.css'

const Cart = () => {
    return (
        <div className="cart">
            <h3>Your Cart</h3>    
            
            <table>
                <thead>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Cart
