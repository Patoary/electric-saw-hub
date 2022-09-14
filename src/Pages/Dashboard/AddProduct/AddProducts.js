import { async } from '@firebase/util';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Heading from '../../../Components/Heading/Heading';
import auth from '../../../firebase.init';

const AddProducts = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { error }, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        console.log(data);
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
                        {...register("name", { required: true })}
                    />

                    <label>Description</label>
                    <textarea
                        className="border py-2 px-5 mb-4 rounded-lg"
                        {...register("description", { required: true })}
                    />

                    <label>Price</label>
                    <input
                        className="border py-2 px-5 mb-4 rounded-lg"
                        type="number"
                        {...register("price", { required: true })}
                    />

                    <label>Total Quantity</label>
                    <input
                        className="border py-2 px-5 mb-4 rounded-lg"
                        type="number"
                        {...register("available", { required: true })}
                    />
                    <label>Minimum Order Quantity</label>
                    <input
                        className="border py-2 px-5 mb-4 rounded-lg"
                        type="number"
                        {...register("minOrderQuantity", { required: true })}
                    />

                    <label>Photo URL</label>
                    <input
                        className="border py-2 px-5 mb-4 rounded-lg"
                        {...register("img", { required: true })}
                    />

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