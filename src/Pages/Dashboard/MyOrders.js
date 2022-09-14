import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import OrdersRow from './OrdersRow';
import { useAuthState } from 'react-firebase-hooks/auth';
import axiosPrivate from '../../Api/axiosPrivate';

const MyOrders = () => {
  const [orders, setOredrs] = useState([]);
  const [user] = useAuthState(auth);
  
  useEffect(() => {
    user &&
    axiosPrivate.get(`http://localhost:4000/order?email=${user?.email}`)
      .then(res => setOredrs(res.data))
  }, [user]);


  const handleDelete = id => {
    const proceed = window.confirm('Are you sure want to delete this item ?')
    if (proceed) {
      const url = `http://localhost:4000/order/${id}`
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          const remaining = orders.filter(order => order._id !== id);
          setOredrs(remaining);
          swal({
            title: "Successfully",
            text: "Delete This Item",
            icon: "success",
            buttons: false,
          });
        })
    }
      return;
  }

  return (
    <div className='bg-gradient-to-r  from-[#00214124] to-[#19d3ae2e] h-screen w-full'>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th className='text-center'></th>
              <th className='text-center'>Image</th>
              <th className='text-center'>Product Name</th>
              <th className='text-center'>Shipping Address</th>
              <th className='text-center'>Quantity</th>
              <th className='text-center'>Price</th>
              <th className='text-center'>Status</th>
              <th className='text-center'>Payment</th>
              <th className='text-center'>Transaction Id</th>
              <th className='text-center'>Action</th>

            </tr>
          </thead>
          <tbody>
            {
              [...orders].reverse().map((order, index) => <OrdersRow
                key={order._id}
                order={order}
                index={index}
                handleDelete={handleDelete}
              ></OrdersRow>)
            }
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MyOrders;