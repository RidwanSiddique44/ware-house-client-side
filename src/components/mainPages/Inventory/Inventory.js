import React from 'react';
import useProducts from '../../Hooks/useProducts';
import AllProducts from './AllProducts/AllProducts';

const Inventory = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <div className=' container review-container'>

                {
                    products.map(product => <AllProducts key={product.id} product={product} ></AllProducts>)
                }
            </div>
        </div>
    );
};

export default Inventory;