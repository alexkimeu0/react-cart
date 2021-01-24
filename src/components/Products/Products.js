import React from 'react'
import Truncate from 'react-truncate'
import { IconButton } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

import './Products.css'

const Products = ({ items }) => {
    return (
        <div className="products">
            <div className="products__items">
            {
                items.map(item => (
                    <div className="products__item">
                        <img src={item.image} alt="" />
                        <h5><Truncate lines="1">{item.title}</Truncate>...</h5>
                        <p><Truncate lines="1">{item.description}</Truncate>...</p>
                        <div className="products__cta">
                            <IconButton><AddShoppingCartIcon /></IconButton>
                            <IconButton><RemoveShoppingCartIcon /></IconButton>
                        </div>
                    </div>
                ))
            }
            </div>            
        </div>
    )
}

export default Products
