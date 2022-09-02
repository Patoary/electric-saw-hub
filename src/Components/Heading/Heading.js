import React from 'react';
import './Heading.css';

const Heading = ({children}) => {
    return (
        <div className=' flex justify-center text-primary text-xl lg:text-2xl font-bold uppercase m-5'>
            <span className='heading'>{children}</span>
        </div>
    );
};

export default Heading;