import React from 'react';
import Footer from '../../Shared/Header/Footer/Footer';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import ProductFeatures from '../ProductFeatures/ProductFeatures';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';


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