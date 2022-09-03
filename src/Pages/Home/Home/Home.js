import React from 'react';
import Login from '../../Login/Login/Login';
import Products from '../../Products/Products';
import Banner from '../Banner/Banner';
import ProductFeatures from '../ProductFeatures/ProductFeatures';
import Review from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Banner />
            <ProductFeatures />
            <Products />
        </div>
    );
};

export default Home;