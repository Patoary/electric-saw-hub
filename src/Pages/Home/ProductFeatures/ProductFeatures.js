import React from 'react';
import swal from 'sweetalert';
import './ProductFeatures.css';

const ProductFeatures = () => {
    return (
        <div>
            <div className="bg-gray-200 py-36">
                <div className="flex flex-col lg:flex-row justify-center items-center max-w-7xl px-8 lg:mx-auto gap-20">
                    <div className="flex-1">
                        <h1 className="heading text-xl lg:text-2xl font-bold uppercase my-6">
                            We try to Make Our saws be Comfortable
                        </h1>
                        <p className='text-md'>
                        Saws have been around since ancient times, and they're still indispensable tools today. Of course, saws have come a long way,
                         and DIY-ers and professionals in the twenty-first century have far more convenient and precise options to choose from than our
                          ancient ancestors did. In fact, many saws today are powered by electricity, meaning the user can focus on guiding the saw or making 
                          the right types of cuts rather than having to use their own physical strength to get the job done.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center gap-10 mx-auto">
                        <div
                            onClick={() => {
                                swal(
                                    "Magnetic chucks include several types such as electromagnetic chucks,permanent magnetic chucks and permanent electromagneticchucks, each having particular functional features.In the machining industry, it has been known since the beginning of the 20th centuryto apply magnets to holding workpieces. In particular, recent technologicaldevelopment has expanded the scope of applications of magnetic chucks from onlygrinding machines to heavy duty cutting processes by machining centers, lathes,milling machines, etc.",
                                    {
                                        className: "rounded-3xl",
                                        buttons:false,
                                    }
                                );
                            }}
                            className="flex justify-centers items-center w-26 h-36 lg:w-32  lg:h-40 cursor-pointer hover:scale-110 transition-all duration-300 bg-primary shadow-primary px-4 py-5 text-white  rounded-2xl shadow-2xl"
                        >
                            
                            <div className="mt-4 lg:mt-7">
                                <p className="text-sm">Chuck</p>
                                <p className="text-[7px] lg:text-[10px]">
                                    Tab to see details
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-10">
                            <div
                                onClick={() => {
                                    swal(
                                        "Features that help you work effectively with a circular saw include accurate cutline markers, good blade visibility, smooth guard retraction, and a flat shoe set parallel to the blade.",
                                        
                                        
                                        {
                                            className: "rounded-3xl",
                                            buttons:false,
                                        }
                                    );
                                }}
                                className="flex justify-centers items-center w-26 h-36 lg:w-32  lg:h-40 cursor-pointer hover:scale-110 transition-all duration-300 bg-gray-400 shadow-gray-500 px-4 py-5 text-white rounded-2xl shadow-2xl "
                            >
                            
                                <div className="mt-4 lg:mt-7">
                                    <p className="text-sm">Corded Saw</p>
                                    <p className="text-[7px] lg:text-[10px]">
                                        Tab to see details
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => {
                                    swal(
                                        "Our saw machine are more then silent from others",
                                        {
                                            className: "rounded-3xl",
                                            buttons: false,
                                        }
                                    );
                                }}
                                className="flex justify-centers items-center w-26 h-36 lg:w-32  lg:h-40 cursor-pointer hover:scale-110 transition-all duration-300 bg-gray-400 shadow-gray-500 px-4 py-5 text-white  rounded-2xl shadow-2xl"
                            >
                                <div className="mt-4 lg:mt-7">
                                    <p className="text-sm">Sound Less</p>
                                    <p className="text-[7px] lg:text-[10px]">
                                        Tab to see details
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => {
                                swal(
                                    "Variable Speed Scroll Saw. The 9/16-inch stroke saws through hard woods up to two inches thick. Adjust the speed anywhere from 550 to 1600 strokes per minute with the simple turn of a knob",
                                    {
                                        className: "rounded-3xl",
                                        buttons: false,
                                    }
                                );
                            }}
                            className="flex justify-centers items-center w-26 h-36 lg:w-32  lg:h-40 cursor-pointer hover:scale-110 transition-all duration-300 bg-primary shadow-primary px-4 py-5 text-white rounded-2xl shadow-2xl"
                        >

                            <div className="mt-4 lg:mt-7">
                                <p className="text-sm">Variable speed</p>
                                <p className="text-[7px] lg:text-[10px]">
                                    Tab to see details
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductFeatures;