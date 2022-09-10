import axios from "axios";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const axiosPrivate = axios.create({});

// request interceptor
axiosPrivate.interceptors.request.use(
    function (config) {
        if (!config.headers.authorization) {
            config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    });


// response interceptor
axiosPrivate.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        
        if (error.response.status === 403 || error.response.status === 401) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            // const navigate = useNavigate();
            // navigate('/');
        }
        return Promise.reject(error);
    });

export default axiosPrivate;