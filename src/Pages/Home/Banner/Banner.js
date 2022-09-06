import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import 'swiper/css';
import Heading from '../../../Components/Heading/Heading';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner'>
                <div className='inside-banner px-5'>
                    <Heading><h1 className='text-white'>Wellcome To SK SAW HUB</h1></Heading>
                    <p className='text-white px-10 my-3'>A power saw is a portable mechanical machine used for both industrial and DIY projects. It is the type of power tool that comprises sturdy blades, chains, wire, set of teeth, etc. It is basically used for the work piece in large cuts. It can cut wood, plastic, metals, concrete and other materials like tiles and bricks</p>
                    <PrimaryButton>
                        <Link to='/'>About</Link>
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;