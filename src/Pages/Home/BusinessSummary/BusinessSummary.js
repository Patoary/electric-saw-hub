import React from 'react';
import Heading from '../../../Components/Heading/Heading';
import './BusinessSummary.css';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import * as TiIcon from 'react-icons/ti';
import * as TbIcon from 'react-icons/tb';
import * as FaIcon from 'react-icons/fa';
import * as BiIcon from 'react-icons/bi';

const BusinessSummary = () => {
    return (
        <section className='bg-gray-200 py-20 px-12'>

            <div className='mb-12'>
                <Heading>We Delivered Our Products Anywhere of the world</Heading>
            </div>
            <div className="business-summery">
                <div className="grid grid-cols-1 py-10 gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div className=" rounded-2xl p-4 bg-white text-gray-500 hover:text-primary flex flex-col justify-center">
                        <div className="text-6xl py-5 mb-2 px-[1.45rem] cursor-text mx-auto transition-all duration-300">
                        <FaIcon.FaFontAwesomeFlag/>
                        </div>
                        <div className="text-center">
                            <CountUp start={0} end={71} duration={2}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span
                                            className="text-4xl my-2 text-primary font-semibold"
                                            ref={countUpRef}
                                        />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            <span className="text-4xl my-2 text-primary font-semibold">
                                +
                            </span>
                            <p className="text-2xl font-semibold my-2 uppercase font-mono">
                                TOTAL AWARDS
                            </p>
                        </div>
                    </div>
                    <div className=" rounded-2xl p-4 bg-white text-gray-500 hover:text-primary  flex flex-col justify-center">
                        <div className="text-6xl py-5 mb-2 px-[1.45rem] cursor-text mx-auto transition-all duration-300">
                            <TbIcon.TbTruckDelivery/>
                        </div>
                        <div className="text-center">
                            <CountUp start={0} end={500} duration={2}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span
                                            className="text-4xl my-2 text-primary font-semibold"
                                            ref={countUpRef}
                                        />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            <span className="text-4xl my-2 text-primary font-semibold">
                                K+
                            </span>
                            <p className="text-2xl font-semibold my-2 uppercase font-mono">
                                TOTAL deliveries
                            </p>
                        </div>
                    </div>
                    <div className=" rounded-2xl p-4 bg-white text-gray-500 hover:text-primary  flex flex-col justify-center">
                        <div className="text-6xl py-5 mb-2 px-[1.45rem] cursor-text mx-auto transition-all duration-300">
                            <TiIcon.TiGroupOutline/>
                        </div>
                        <div className="text-center">
                            <CountUp start={0} end={50} duration={2}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span
                                            className="text-4xl my-2 text-primary font-semibold"
                                            ref={countUpRef}
                                        />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            <span className="text-4xl my-2 text-primary font-semibold">
                                K+
                            </span>
                            <p className="text-2xl font-semibold my-2 uppercase font-mono">
                                Happy clients
                            </p>
                        </div>
                    </div>
                    <div className=" rounded-2xl p-4 bg-white text-gray-500 hover:text-primary   flex flex-col justify-center">
                        <div className="text-6xl py-5 mb-2 px-[1.45rem] cursor-text mx-auto transition-all duration-300">
                            <BiIcon.BiLike/>
                        </div>
                        <div className="text-center">
                            <CountUp start={0} end={10} duration={2}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span
                                            className="text-4xl my-2 text-primary font-semibold"
                                            ref={countUpRef}
                                        />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            <span className="text-4xl my-2 text-primary font-semibold">
                                K+
                            </span>
                            <p className="text-2xl font-semibold my-2 uppercase font-mono">
                                positive Feedbacks
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-5 mb-10">
                <h2 className="uppercase text-lg lg:text-2xl text-secondary font-extrabold text-center font-poppins">
                    if you want to
                </h2>
                <button className="button w-3/5"> Contact Us</button>
            </div>
        </section >
    );
};

export default BusinessSummary;