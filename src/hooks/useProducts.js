// import { useEffect, useState } from "react"

// const useProducts = () => {
//     const [products, setProducts] = useState([]);
//     useEffect(() => {
//         fetch('./products.json')
//             .then(response => response.json())
//             .then(data => setProducts(data))
//     }, [])
//     // return necessary things
//     return[products]
// }

// export default useProducts;

import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts];
};

export default useProducts;