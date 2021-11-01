import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const { name, price, star, seller, img } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <img src={img} alt="" />
            <div>
                <h3 className="name">{name}</h3>
                <h3>${price}</h3>
                <h3>By {seller}</h3>
                <p>rating: {star}</p>
                <button onClick={() => props.handleAddToCart(props.product)}
                    className="purchase-btn">{element} add to cart</button>
            </div>
        </div>
    );
};

export default Product;