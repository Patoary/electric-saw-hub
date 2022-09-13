import React from 'react';
import {MdDeleteOutline} from 'react-icons/md';
import { Link } from 'react-router-dom';

const OrdersRow = ({order, index, handleDelete}) => {
    const {productImage,status, address, totalQuantity, totalPrice ,productName, _id, paid, transactionId} = order;
    return (
        <>
            <tr className='w-full'>
                <th className='text-center'>{index + 1}</th>
                <td className='text-center'><img className='h-16 w-16' src={productImage} alt="" /></td>
                <td className='text-center'>{productName}</td>
                <td className='text-center'>{address}</td>
                <td className='text-center'>{totalQuantity}</td>
                <td className='text-center'>{totalPrice}</td>
                <td className='text-center'>{status}</td>
                <td>
                    {(totalPrice && !paid) && <Link to={`/dashboard/payment/${_id}`}><button className='text-green-500 text-xl font-bold'>Pay</button></Link>}
                    {
                        (totalPrice && paid) && <button className='text-green-600 btn-disabled bg-white text-xl font-bold'>Paid</button>
                    }
                </td>
                <td>
                    {paid ? <p className='text-blue-600 font-bold'>{transactionId}</p> : <p className='text-blue-400 font-bold'>Payment Uncomplete</p>}
                </td>
                <td>
                    {
                        !paid ? 
                            <div><MdDeleteOutline
                        className= 'text-red-600 rounded-full text-3xl cursor-pointer'
                        onClick={()=> handleDelete(_id)} /></div>
                        : 
                        <div>
                        <MdDeleteOutline
                        className= 'text-red-400 rounded-full text-3xl disabled'
                         />
                        </div>
                            
                       
                    }
                </td>
            </tr>
        </>
    );
};

export default OrdersRow;