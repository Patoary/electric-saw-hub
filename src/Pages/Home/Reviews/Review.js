import React from 'react';
import * as AiStar from 'react-icons/ai';
import userDefaultImg from '../../../assets/images/userDefaultImg.png';

const Review = ({ review }) => {
    const { name, img, reviewContent, ratings } = review;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <div>
                        <div class=" flex items-center mb-3">
                            <div className="avatar">
                                <div className="w-12 mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    {
                                        img ? <img src={img} alt='cutomer img' /> : <img src={userDefaultImg} alt='defautl img' />
                                    }
                                </div>
                            </div>
                            <div>
                                <p>{name}</p>

                            </div>
                        </div>
                        <div className='flex justify-around items-center'>
                            <div>
                                <p>{reviewContent}</p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className='mx-2 font-semibold'>Ratings: <span>{ratings}</span></p>
                                <AiStar.AiFillStar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;