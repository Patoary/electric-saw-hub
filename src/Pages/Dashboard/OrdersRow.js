import React from 'react';

const OrdersRow = ({order, index}) => {
    const {productImage,status, address, totalQuantity, totalPrice ,productName, stats} = order;
    return (
        <>
            <tr className='w-full'>
                <th>{index + 1}</th>
                <td><img className='h-16 w-16' src={productImage} alt="" /></td>
                <td>{productName}</td>
                <td>{address}</td>
                <td>{totalQuantity}</td>
                <td>{totalPrice}</td>
                <td>{status}</td>
                <td><button className='text-red-500'>Pay</button></td>
            </tr>
        </>
    );
};

export default OrdersRow;