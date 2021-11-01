import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
    let total=0;
    for (const product of cart) {
        total=total+product.price;
    }
    return (
        <div>
            <h1>Order Summary</h1>
                <h1>Items Ordered: {props.cart.length }</h1>
                <h3>Total: {total}</h3>
        </div>
    );
};

export default Cart;