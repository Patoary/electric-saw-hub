import React from 'react';
import * as AiStar from 'react-icons/ai';

const Review = ({review}) => {
    const{name, img, description, ratings} = review;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <div>
                        <div class="avatar flex items-center mb-3">
                            <div class="w-12 mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" alt='cutomer img'/>
                            </div>
                            <div>
                              <p>{name}</p>
                              
                            </div>
                        </div>
                        <div className='flex justify-around items-center'>
                            <div>
                            <p>{description}</p>
                            </div>
                            <div className='flex items-center justify-center'>
                            <p className='mx-2 font-semibold'>Ratings: <span>{ratings}</span></p>
                            <AiStar.AiFillStar/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;