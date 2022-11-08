import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [soldProducts, setSoldProducts] = useState();

    useEffect(() => {
        fetch(`products.json`)
            .then(res => res.json())
            .then(data => setSoldProducts(data));
    }, [])
    return (
        <>
            <h2 className="text-4xl font-bold text-primary my-5 border-b-4 border-indigo-500 inline-block ml-3">Sold Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    soldProducts?.map(soldProduct => <Product
                        key={soldProduct._id}
                        soldProduct={soldProduct}
                    ></Product>)
                }
            </div>
        </>
    );
};

export default Products;