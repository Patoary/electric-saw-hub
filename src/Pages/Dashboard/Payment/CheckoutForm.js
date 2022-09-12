import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const element = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const { totalPrice, userName, userEmail } = order.data;
    console.log(totalPrice)

    useEffect(()=>{
        fetch('http://localhost:4000/create-payment-intent', {
            method:'POST',
            headers:{
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({totalPrice})
        })
        .then(res => res.json())
        .then(data => {
            if(data?.clientSecret){
                console.log(clientSecret)
                setClientSecret(data.clientSecret);
            }
        });

    },[totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !element) {
            return;
        }
        const card = element.getElement(CardElement);
        if (card == null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '')
        setSuccess('');
        // confirm card payment 
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: userEmail
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
        } else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            setSuccess('Congrats! Your payment is completed.')
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='mt-5 bg-green-500 p-2 rounded-md' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your Transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;