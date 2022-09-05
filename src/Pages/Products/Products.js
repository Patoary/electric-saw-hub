import React from 'react';
import { useQuery } from 'react-query';
import Heading from '../../Components/Heading/Heading';
import './Products.css';
import Loding from '../../Components/Loading/Loading';
import ProductCard from './ProductCard';
const Products = () => {
    const { data: saws, isLoading } = useQuery('all-saws', () =>
        fetch('http://localhost:4000/product')
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loding />
    }
    return (
        <div className=''>
            <div className='bg-gradient-to-r  from-[#00214124] to-[#19d3ae2e] py-20 px-12'>
                <div><Heading>Our Manufacturing Line</Heading></div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                    {
                        [...saws]?.reverse().slice(0, 6).map(saw => <ProductCard
                            key={saw._id}
                            saw={saw}
                        ></ProductCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Products;