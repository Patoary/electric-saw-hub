import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const GoogleLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorElement;
    if (error) {
        errorElement = <p className='text-red-500 mb-5'> <small>Error:{error.message}</small></p>
    }
    if (user) {
        navigate('/');
    }
    return (
        <div className='w-[286px] h-[46]'>
        <p className='w-[320px]'>{errorElement}</p>
            <button
                className="btn btn-outline text-primary hover:bg-secondary w-[320px] h-[46]"
                onClick={() => signInWithGoogle()}
            >
                <span className='mr-2'><FaGoogle /></span>
                Continue with Google
            </button>
        </div>
    );
};

export default GoogleLogin;