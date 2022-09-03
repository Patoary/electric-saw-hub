import React from 'react';
import { useQuery } from 'react-query';
import Heading from '../../Components/Heading/Heading';
import './Products.css';
const Products = () => {
    const {data:saws} = useQuery('all-saws', () =>{
        fetch('saws.json')
        .then(res => res.json())

    })
    return (
        <div className='bg-gradient-to-r from-[#00214124] to-[#19d3ae2e] py-10'>
            <div><Heading>Our Manufacturing Line</Heading></div>

            
        </div>
    );
};

export default Products;