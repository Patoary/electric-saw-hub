import React from 'react';

const NotFound = () => {
    return (
        <div>
            <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-[#00214124] to-[#19d3ae2e]">
                <h1 className="text-9xl font-extrabold text-white tracking-widest text-primary">404</h1>
                <div className="bg-[#FF6A3D] text-3xl px-2 text-sm rounded rotate-12 ">
                    Page Not Found
                </div>
                
            </div>
        </div>
    );
};

export default NotFound;