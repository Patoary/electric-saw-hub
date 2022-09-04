import React from 'react';
import Login from '../../Login/Login/Login';
import Products from '../../Products/Products';
import Footer from '../../Shared/Header/Footer/Footer';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import ProductFeatures from '../ProductFeatures/ProductFeatures';
import Reviews from '../Reviews/Reviews';
import Review from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Banner />
            <ProductFeatures />
            <Products />
            <BusinessSummary/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default Home;