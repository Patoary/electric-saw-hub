import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const ProductCard = ({ product }) => {
    const { name, price, img, description, available, minOrderQuantity, _id } = product;
    return (
        <section>
            <div className='card card-compact max-w-lg bg-base-100 shadow-xl mt-10 mx-auto duration-200'>
                    <figure
                    className='h-56 w-40 flex justify-center items-center mx-auto p-5'
                    ><img src={img} alt="saw" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title text-primary mx-auto text-3xl">{name}</h2>
                        <p>{description.slice(0, 110)}...</p>
                        <div className='flex justify-between'>
                            <h4 className='text-md font-semibold text-[#19d3aede]'>Available : {available}</h4>
                            <h4 className='text-md font-semibold text-[#19d3aede]'>Minimum Ordre : {minOrderQuantity}</h4>
                        </div>

                        <div className='flex justify-between'>
                            <h3 className='text-secondary font-bold text-2xl lg:4xl'>Price : ${price}</h3>
                           <PrimaryButton><Link to={`/purchase/${_id}`}>Purchase</Link></PrimaryButton>
                        </div>
                    </div>
                </div>
         
        </section>
    );
};

export default ProductCard;