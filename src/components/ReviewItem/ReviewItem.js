import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, img } = props.product;
    return (
        <div className="product">
            {/* <div>
                <img src={img} alt="" />
            </div> */}
            <div >
                <h4 className="name">{name}</h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button className="purchase-btn">Remove Item</button>
            </div>
        </div>
    );
};

export default ReviewItem;