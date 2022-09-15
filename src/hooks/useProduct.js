import { useEffect, useState } from "react";
import axiosPrivate from "../Api/axiosPrivate";



const useProduct =() => {
    const [saws, setSaws] = useState([]);
    useEffect(()=> {
        axiosPrivate.get('https://lit-wildwood-53633.herokuapp.com/product')
        .then(res => setSaws(res.data))
    },[]);
    return [saws, setSaws];
};

export default useProduct;
