import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const GoogleLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    let errorElement;
    let from = location.state?.from?.pathname || '/';
  
    if (user) {
        console.log(user?.user?.displayName)
        navigate(from, {replace: true});
    }
    if (error) {
        errorElement = <p className='text-red-500 mb-5'> <small>Error:{error.message}</small></p>
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