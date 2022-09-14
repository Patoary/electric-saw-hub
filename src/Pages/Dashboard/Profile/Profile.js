
import React, { useEffect, useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivate from "../../../Api/axiosPrivate";
import Loading from "../../../Components/Loading/Loading";
import auth from "../../../firebase.init";
const Profile = () => {
    const [user] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [updateProfile, updating, error] = useUpdateProfile(auth);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { isLoading, refetch, isError } = useQuery(['userInfo', user.email], () =>
        axiosPrivate.get(`http://localhost:4000/user-data?email=${user.email}`)
            .then(res => {
                setUserInfo(res.data)
            })

    );

    let errorElement;
    if (updating || isLoading) {
        return <Loading />;
    }
    if (error || isError) {
        errorElement = <p className='text-red-500'><small>{error.message}</small></p>
    }
    const onSubmit = async (updatedInfo) => {

        const updatedProfile = {
            ...updatedInfo,
            image: user.photoURL,
            email: user.email,
        }
        console.log(updatedProfile)
        await updateProfile({
            displayName: updatedInfo?.name,
            photoURL: updatedInfo?.image,
        });

        await axiosPrivate.patch(`http://localhost:4000/user/${userInfo._id}`, updatedProfile)
            .then(res => {
                if (res.data.success) {
                    toast.success('Successfully updated your profile');
                    refetch();
                }
            })

    };
    return (
        <div className="bg-gradient-to-r from-[#00214124] to-[#19d3ae2e]">
            <div className="container w-full mx-auto p-5 lg:p-10 mb-40 mt-5 ">
                <div className="md:flex w-full no-wrap md:-mx-2 ">
                    <div className="w-full lg:w-1/3 md:mx-2 lg:mt-1 p-3">
                        <div className="bg-white p-5 rounded-lg shadow-lg">
                            <div className="image overflow-hidden">
                                <img
                                    className="h-auto w-full mx-auto"
                                    src={`${userInfo?.image
                                        ? userInfo?.image
                                        : "https://i.ibb.co/T1D3tqN/images.png"
                                        }`}
                                    alt=""
                                />
                            </div>
                            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                                {userInfo?.name ? userInfo?.name : "- - -"}
                            </h1>
                            <h3 className="text-gray-600 font-lg text-semibold leading-6">
                                {userInfo?.email ? userInfo?.email : "- - -"}
                            </h3>
                            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                <li className="flex items-center py-3">
                                    <span>Role</span>
                                    <span className="ml-auto">
                                        <span className="bg-primary py-1 px-2 rounded text-white text-sm">
                                            {(userInfo?.role) ? <span className="uppercase">{userInfo?.role}</span> : <span className="uppercase">User</span>}
                                        </span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 w-full">
                        <div className="w-full my-4 h-64 ">
                            <div className="bg-white p-5 rounded-t-lg shadow-xl rounded-sm">
                                <div className="text-gray-700">
                                    <div className="text-xs lg:text-md">
                                        <div className="grid grid-cols-2">
                                            <div className="py-2 font-semibold">Name</div>
                                            <div className="py-2">
                                                {userInfo?.name ? userInfo?.name : "- - -"}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2">
                                            <div className="py-2 font-semibold">Email.</div>
                                            <div className="py-2 w-[20ch]">
                                                {userInfo?.email ? userInfo?.email : "- - -"}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="py-2 font-semibold">Gender</div>
                                            <div className="py-2">

                                                {userInfo?.gender ? userInfo?.gender : "- - -"}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="py-2 font-semibold">Contact No.</div>
                                            <div className="py-2">

                                                {userInfo?.phone ? userInfo?.phone : "- - -"}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="py-2 font-semibold">Address</div>
                                            <div className="py-2">

                                                {userInfo?.address ? userInfo?.address : "- - -"}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="py-2 font-semibold">Education</div>
                                            <div className="py-2">
                                                {userInfo?.education ? userInfo?.education : "- - -"}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="py-2 font-semibold">
                                                LinkedIn profile link
                                            </div>
                                            <div className="py-2">
                                                <Link
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-green-500 underline"
                                                    to={
                                                        userInfo?.linkedInLink
                                                            ? userInfo?.linkedInLink
                                                            : "#"
                                                    }
                                                >
                                                    Click Here
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <label
                                    htmlFor="my-modal-6"
                                    onClick={() => setIsEdit(true)}
                                    className="text-center block w-full text-primary text-md shadow font-semibold rounded-lg hover:bg-secondary hover:text-white focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                                >
                                    Edit Profile
                                </label>
                            </div>
                        </div>

                        <div className="my-4"></div>
                        <div
                            className={`${isEdit ? "block" : "hidden"
                                } bg-white w-full  mx-auto p-5 my-5 mt-16 rounded-br-lg rounded-bl-lg shadow-xl rounded-sm relative`}
                        >
                            <div className="flex items-center space-x-2 font-semibold text-primary leading-8 mb-5">
                                {
                                    userInfo.image ? <span className="avatar">
                                    <div className="rounded-full w-12">
                                      <img src={userInfo.image} alt='profile pic' />
                                    </div>
                                  </span> 
                                    :
                                    <span class="text-green-500">
                                    <svg
                                        className="h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                </span>
                                }
                                <span className="tracking-wide">Edit</span>
                                <button
                                    onClick={() => setIsEdit(false)}
                                    className="btn btn-primary btn-sm btn-circle absolute right-2 top-2"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="text-gray-700 w-full">
                                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                                    <div className="flex gap-5 -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                {...register("name", {
                                                    minLength: {
                                                        value: 4,
                                                        message: "Minimum Four Characters",
                                                    },
                                                })}
                                                defaultValue={userInfo?.name && userInfo?.name}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                placeholder="Your Name"
                                            />
                                            <label className="label">
                                                {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                            </label>
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                Gender
                                            </label>
                                            <select
                                                {...register("gender")}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                type="text"
                                                defaultValue={
                                                    userInfo?.gender ? userInfo?.gender : "Male"
                                                }
                                                placeholder="Gender"
                                            >
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex gap-5 -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                Education
                                            </label>
                                            <input
                                                {...register("education")}
                                                defaultValue={
                                                    userInfo?.education && userInfo?.education
                                                }
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                type="text"
                                                placeholder="Education"
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                Contact No.
                                            </label>
                                            <input
                                                {...register("phone")}
                                                defaultValue={userInfo?.phone && userInfo?.phone}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                type="number"
                                                placeholder="Contact No."
                                            />
                                        </div>
                                    </div>
                                    <div className="flex  gap-5 -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                Address
                                            </label>
                                            <input
                                                {...register("address")}
                                                defaultValue={userInfo?.address && userInfo?.address}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                type="text"
                                                placeholder="Address"
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                LinkedIn profile link
                                            </label>
                                            <input
                                                {...register("linkedInLink")}
                                                defaultValue={
                                                    userInfo?.linkedInLink && userInfo?.linkedInLink
                                                }
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                type="text"
                                                placeholder="LinkedIn profile link"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex  gap-5 -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                Image
                                            </label>
                                            <input
                                                {...register("image")}
                                                defaultValue={userInfo?.image && userInfo?.image}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                type="text"
                                                placeholder="Your Image Link"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="text-center block w-full text-primary text-md shadow font-semibold rounded-lg hover:bg-secondary hover:text-white focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                                    >
                                        Save Changes
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {errorElement}
            </div>
        </div>
    );
};

export default Profile;