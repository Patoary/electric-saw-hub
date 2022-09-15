import React from 'react';
import Heading from '../../../Components/Heading/Heading';
import './Products.css';
import ProductCard from './ProductCard';
import useProduct from '../../../hooks/useProduct';
const Products = () => {
    const [products] = useProduct([]);
    const limitedProducts = products.slice(0, 3);
    return (
        <div className=''>
            <div className='bg-gradient-to-r  from-[#00214124] to-[#19d3ae2e] py-20 px-12'>
                <div><Heading>Our Manufacturing Line</Heading></div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                    {
                        limitedProducts && [...limitedProducts]?.reverse()?.slice(0, 3)?.map(product => <ProductCard
                            key={product._id}
                            product={product}
                        ></ProductCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Products;