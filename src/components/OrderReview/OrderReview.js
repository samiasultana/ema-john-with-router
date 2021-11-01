import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart] = useCart(products);
    return (
        <div className="shop-container">
            {/* <h3>{products.length}</h3>
            <h1>Order</h1>
            <h3>{cart.length}</h3>
            <Cart cart={cart}></Cart> */}
            <div className="product-container">
            {
                cart.map(product=><ReviewItem product={product}></ReviewItem>)
            }
            </div>
            <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;