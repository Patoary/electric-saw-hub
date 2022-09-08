import React from 'react';
import './Heading.css';

const Heading = ({children}) => {
    return (
        <div className=' flex justify-center items-center text-xl  font-bold uppercase'>
            <span className='heading'>{children}</span>
        </div>
    );
};

export default Heading;