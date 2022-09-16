import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../Api/axiosPrivate';
import Heading from '../../../Components/Heading/Heading';

const AddProducts = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        const newProductData = {
            ...data,
        }
        axiosPrivate.post('https://lit-wildwood-53633.herokuapp.com/product', newProductData)
        .then(res => {
         
            console.log(res?.data?.insertedId);
            if(res?.data?.insertedId){
                toast.success('Added A New Product Successfully');
                reset();
            }else{
                toast.error('Failed To Add The Product')
            }
        })
        
    }
    return (
        <div className='bg-gradient-to-r from-[#00214124] to-[#19d3ae2e]'>
            <div className="px-4">

                <form
                    className="flex flex-col mx-auto justify-center lg:w-1/2 w-full lg:p-24 p-5 my-8 rounded-2xl shadow-lg bg-white"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Heading>
                        <h2 className="text-primary">
                            Please Add Your Item
                        </h2>
                    </Heading>
                    <label>Product Name</label>
                    <input
                        className="border py-2 px-5 mb-4 rounded-lg"
                        {...register("name", { 
                            required: {
                                value: true,
                                message: 'Name is Required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>

                    <label>Description</label>
                    <textarea
                        className="border py-2 px-5 mb-4 rounded-lg"
                        {...register("description", { 
                            required: {
                                value: true,
                                message: 'Description is Required'
                            },
                         })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>

                    <label>Price</label>
                    <input
                        className="border py-2 px-5 mb-4 rounded-lg"
                        type="number"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            },
                         })}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                    <label>Available Quantity</label>
                    <input
                        className="border py-2 px-5 mb-4 rounded-lg"
                        type="number"
                        {...register("available", { 
                            required: {
                                value: true,
                                message: 'Available quantity is Required'
                            },
                         })}
                    />
                    <label className="label">
                        {errors.available?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available.message}</span>}
                    </label>
                    <label>Minimum Order Quantity</label>
                    <input
                        className="border py-2 px-5 mb-4 rounded-lg"
                        type="number"
                        {...register("minOrderQuantity", { 
                            required: {
                                value: true,
                                message: 'Minimum Order Quantity is Required'
                            },
                         })}
                    />
                    <label className="label">
                        {errors.minOrderQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minOrderQuantity.message}</span>}
                    </label>

                    <label>Photo URL</label>
                    <input
                        className="border py-2 px-5 mb-4 rounded-lg"
                        {...register("img", { 
                            required: {
                                value: true,
                                message: 'PhotoURL is Required'
                            },
                         })}
                    />
                    <label className="label">
                        {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                    </label>

                    <div className="flex justify-center">
                        <input
                            className="border py-2 lg:px-14 px-6 mb-4 mr-2 rounded-lg cursor-pointer text-white bg-primary hover:bg-secondary"
                            type="submit" value='Add Prouduct'
                        />
                        <input
                            onClick={() => {
                                reset();
                            }}
                            className="border py-2 lg:px-14 px-6 mb-4 ml-2 rounded-lg cursor-pointer text-white bg-primary hover:bg-secondary"
                            type="reset"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;