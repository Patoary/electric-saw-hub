import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Loading from '../../Components/Loading/Loading';
import auth from '../../firebase.init';

const Purchase = () => {
    const [orderedQuantity, setOrdredQuantity] = useState(0);
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const { register, formState: { errors }, handleSubmit, watch,reset } = useForm()

    const { data: saw, isLoading, } = useQuery(['saw', id], () =>
        fetch(`https://lit-wildwood-53633.herokuapp.com/product/${id}`)
            .then(res => res.json())
    );
    

    const orderingQuantity = parseInt(watch('totalQuantity'));
    useEffect(() => {
        setOrdredQuantity(orderingQuantity);

    }, [orderingQuantity]);


    const onSubmit = orderData => {
        setOrdredQuantity(orderData?.totalQuantity);
        const orderSummery = {
            ...orderData,
            userName: user?.displayName,
            userEmail: user?.email,
            productName: name,
            productId: _id,
            productImage: img,
            totalPrice: orderedQuantity * price,
            status: 'Pending'
            
        };
        
        fetch(`https://lit-wildwood-53633.herokuapp.com/order`,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderSummery)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                swal({
                    title: "Order Placed",
                    text: "Please Pay For Proceed",
                    icon: "success",
                    buttons:false,
                  });
            }
        })
        reset();


    };



    if (isLoading) {
        return <Loading />
    }

    const { name, img, price, description, available, minOrderQuantity, _id } = saw;



    return (
        <div>
            <div class="">
                <div class="flex flex-col lg:flex-row-reverse justify-evenly items-center">
                    <div class="text-center lg:text-left ml-5">
                        <div className=' max-w-lg bg-base-100  mx-auto duration-200'>
                            <figure
                                className='h-96 w-56 flex justify-center items-center mx-auto'
                            ><img src={img} alt="saw" />
                            </figure>
                            <div class="">
                                <h2 class="text-primary font-bold text-center mx-auto text-3xl mb-3">{name}</h2>
                                <p className='text-xl'>{description}</p>
                                <div className='flex justify-between'>
                                    <h4 className='text-xl font-semibold'>Available : <span className='text-2xl text-primary'>{available}</span> Psc</h4>
                                    <h4 className='text-xl font-semibold'>Minimum Ordre : <span className='text-2xl text-primary'>{minOrderQuantity}</span> Psc </h4>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mt-16">
                        <div class="card-body">
                            <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <input
                                        type='text'
                                        value={user?.displayName}
                                        disabled
                                        className='input input-bordered w-full'
                                    />
                                </div>
                                <div className="form-control">
                                    <input
                                        type='email'
                                        value={user?.email}
                                        disabled
                                        className='input input-bordered w-full'
                                    />

                                </div>

                                <div class="form-control">
                                    <input {...register('address', {
                                        required: {
                                            value: true,
                                            message: 'Address is reaquired'
                                        },

                                    })}
                                        type='text'
                                        placeholder='Enter your address'
                                        className='input input-bordered w-full'
                                    />
                                    <label className="label">
                                        {errors.address?.type === 'required' && <span className='label-text-alt font-bold text-red-500'>{errors.address.message}</span>}
                                    </label>
                                </div>
                                <div className='form-control'>
                                    <input type="number"
                                        {...register('phone', {
                                            required: {
                                                value: true,
                                                message: 'Phone is required',
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Please provide a valid phone number Must be 6 characters or longer'
                                            },
                                        })}
                                        placeholder='Enter your mobile number '
                                        className='input input-bordered w-full'
                                    />
                                    <label className='label'>
                                        {errors.phone?.type === 'required' && <span className='label-text-alt font-bold text-red-500'>{errors.phone.message}</span>}
                                        {errors.phone?.type === 'minLength' && <span className='label-text-alt font-bold text-red-500'>{errors.phone.message}</span>}
                                    </label>
                                </div>

                                <div>
                                    <div className='flex justify-between items-center mb-3'>
                                        <div className='form-control w-full'>
                                            <label className='label'>
                                                <span className='label-text'>Minimum Order Quantity</span>
                                            </label>
                                            <input type="number"
                                                {...register('totalQuantity', {
                                                    required: {
                                                        value: true,
                                                        message: 'Quantity is required to ordre',
                                                    },
                                                })}
                                                placeholder='Input Quantity'
                                                className='input input-bordered'
                                                defaultValue={minOrderQuantity}

                                            />
                                        </div>
                                        <div className='bg-secondary w-full py-3 text-center rounded-lg text-lg font-semibold ml-5 mt-8'>
                                            Total : <span className='text-primary font-bold px-3' >
                                            {orderingQuantity * price}
                                            </span>
                                        </div>
                                    </div>
                                    <label className='label'>
                                        {minOrderQuantity > orderedQuantity && (
                                            <p className='label-text-alt font-bold text-red-500'>Minimum Order is {minOrderQuantity}</p>
                                        )}
                                        {orderingQuantity > available && (
                                            <p className='label-text-alt font-bold text-red-500'>Maximum Order is {available}</p>
                                        )}
                                    </label>
                                </div>

                                <button
                                    disabled={
                                        minOrderQuantity > orderedQuantity
                                        || orderedQuantity > available
                                    }
                                    className='btn btn-secondary text-lg'
                                >
                                    Order Now
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;