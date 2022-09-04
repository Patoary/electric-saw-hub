import React from 'react';
import Login from '../../Login/Login/Login';
import Products from '../../Products/Products';
import Footer from '../../Shared/Header/Footer/Footer';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import ProductFeatures from '../ProductFeatures/ProductFeatures';
import Review from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Banner />
            <ProductFeatures />
            <Products />
            <BusinessSummary/>
            <Footer/>
        </div>
    );
};

export default Home;