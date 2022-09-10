import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';

const UsersRow = ({ order, index }) => {
    const { _id, name, email } = order;
    return (
        <tr className='w-full '>
            <th className='text-center'>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td><PrimaryButton>Admin</PrimaryButton></td>
            <td><MdDeleteOutline
                className='text-red-500 rounded-full text-3xl cursor-pointer'

            /></td>
        </tr>
    );
};

export default UsersRow;