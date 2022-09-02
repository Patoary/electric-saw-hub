import React from 'react';
import Login from '../../Login/Login/Login';
import Banner from '../Banner/Banner';
import ProductFeatures from '../ProductFeatures/ProductFeatures';
import Review from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
            <ProductFeatures/>
          
        </div>
    );
};

export default Home;