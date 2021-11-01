import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('/products.JSON')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        //save to local storage of application tab
        addToDb(product.key);
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        console.log(matchedProducts.length);
    }
    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="search product"
                    onChange={handleSearch} />
            </div>
            <div className="shop-container">
                {/* <h1>Shop</h1> */}
                <div className="product-container">
                    {/* <h1>Products: {products.length}</h1> */}
                    {
                        products.map(pd => <Product
                            key={pd.key}
                            product={pd}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }

                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                    {/* <h1>Order Summary</h1>
                <h1>Items Ordered: {cart.length }</h1> */}
                </div>
            </div>
        </>
    );
};

export default Shop;