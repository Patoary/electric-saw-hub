import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';
import axiosPrivate from '../../../Api/axiosPrivate';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Loading/Loading';

const stripePromise = loadStripe('pk_test_51LaKKLF5F0rQ849D8uHdutCmqIwtTGDp0Z85AK7ue654oppDvS7KuKdNXSkae7e2Tjj91x80RVlgjU0aWrMheFsF00GuHl4IpF');
const Payment = () => {
    const {id} = useParams();
    const {data: order, isLoading} = useQuery('order', ()=>
    axiosPrivate.get(`https://lit-wildwood-53633.herokuapp.com/order/${id}`)
    ) 
    if(isLoading){
        return <Loading/>
    }
    return (
        <div className=''>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello,{order.data.userName} </p>
                    <h2 className="card-title">Pay for {order.data.productName} Total Quantity <span className='text-secondary'>{order.data.totalQuantity}</span> Pcs</h2>
                    
                    <p className='text-lg'>Please pay: <span className='font-bold text-secondary'>$ {order.data.totalPrice}</span> </p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50  max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order= {order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;