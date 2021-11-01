import React from 'react';
import logo from '../../images/logo.png' ;
import './Header.css'

const Header = () => {
    return (
        <div className="App">
            {/* <h1>Header</h1> */}
            <img className="logo" src={logo} alt="" />

            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Inventory</a>
            </nav>
        </div>
    );
}; 

export default Header;