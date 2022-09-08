import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading/Loading';
import OrdersRow from './OrdersRow';

const MyOrders = () => {
    const { data: orders, isLoading } = useQuery('orders', () =>
        fetch('http://localhost:4000/order')
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    };


    return (
        <div className='bg-gradient-to-r  from-[#00214124] to-[#19d3ae2e] h-screen w-full'>
           <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Shipping Address</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
              <th>Payment</th>
         
            </tr>
          </thead>
          <tbody>
            {
              [...orders].reverse().map((order, index) => <OrdersRow
              key={order._id}
              order={order}
              index={index}
              >
              </OrdersRow>)
            }
          </tbody>
        </table>
      </div>

        </div>
    );
};

export default MyOrders;