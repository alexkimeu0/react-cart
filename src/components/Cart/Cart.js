import React from 'react'
import './Cart.css'

const Cart = ({ items }) => {
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
                    {
                        items?.map(item => (
                            <tr>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>Quantity</td>
                                <td>Total</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    )
}

export default Cart
