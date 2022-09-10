import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading/Loading';
import UsersRow from './UsersRow';

const AllUsers = () => {
    const {data: users, isLoading} = useQuery('user', ()=> 
    fetch('http://localhost:4000/user',{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    })
    .then(res => res.json())
    )

    if (isLoading) {
        <Loading />
    }
    return (
        <div className='bg-gradient-to-r  from-[#00214124] to-[#19d3ae2e] h-screen w-full'>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th className='text-center'>Serial No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <UsersRow
                                index={index}
                                key={user._id}
                                user={user}
                            ></UsersRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;