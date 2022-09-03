import React from 'react';
import './Heading.css';

const Heading = ({children}) => {
    return (
        <div className=' flex justify-center text-primary text-xl lg:text-2xl font-bold uppercase'>
            <span className='heading'>{children}</span>
        </div>
    );
};

export default Heading;