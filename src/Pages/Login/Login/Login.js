import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Loading from '../../../Components/Loading/Loading';
import auth from '../../../firebase.init';


const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };

    let logInError;
    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        logInError = <p className='text-red-500'><small>{error.message}</small></p>
    }

    if (user) {
        navigate('/');
    }
    return (
        <div className='bg-gradient-to-r  from-[#00214124] to-[#19d3ae2e] '>
            <div className='flex justify-center items-center h-screen'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-xl text-secondary font-bold">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full max-w-xs"
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                </label>
                            </div>
                            {logInError}
                            <input className='btn w-full bg-primary text-white hover:bg-secondary w-xs mt-3' type="submit" value='Login' />
                        </form>
                        <div className='flex justify-between'>
                            <p className='text-center text-primary'><small> <Link to='/' className='text-secondary'>Forgot password ?</Link></small></p>
                            <p className='text-center text-primary'><small> <Link to='/signup' className='text-secondary'>Don't have an account ?</Link></small></p>
                        </div>

                        <div className="divider">OR</div>
                        <button
                            className="btn btn-outline text-primary hover:bg-secondary"
                        >
                            <span className='mr-2'><FaGoogle /></span>
                            Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;