import React from 'react';
import {MdDeleteOutline} from 'react-icons/md';
import { Link } from 'react-router-dom';

const OrdersRow = ({order, index, handleDelete}) => {
    const {productImage,status, address, totalQuantity, totalPrice ,productName, _id} = order;
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
                <td><Link to={`/dashboard/payment/${_id}`}><button className='text-red-500 text-xl font-bold'>Pay</button></Link></td>
                <td><MdDeleteOutline
                 className= 'text-red-500 rounded-full text-3xl cursor-pointer'
                 onClick={()=> handleDelete(_id)}
                 /></td>
            </tr>
        </>
    );
};

export default OrdersRow;