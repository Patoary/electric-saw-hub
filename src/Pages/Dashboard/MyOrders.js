import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import OrdersRow from './OrdersRow';

const MyOrders = () => {
  const [orders, setOredrs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/order')
      .then(res => res.json())
      .then(data => setOredrs(data))
  }, []);


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
              <th></th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Shipping Address</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Action</th>

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