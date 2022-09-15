import React from 'react';
import Heading from '../../Components/Heading/Heading';
import useProduct from '../../hooks/useProduct';
import ProductCard from '../Home/Products/ProductCard';

const AllProducts = () => {
    const [products] = useProduct([]);
    return (
        <div className=''>
            <div className='bg-gradient-to-r  from-[#00214124] to-[#19d3ae2e] py-20 px-12'>
                <div><Heading>Our Manufacturing Line</Heading></div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                    {
                        products?.reverse()?.map(product => <ProductCard
                            key={product._id}
                            product={product}
                        ></ProductCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default AllProducts;