import { useEffect, useState } from "react";
import axiosPrivate from "../Api/axiosPrivate";



const useProduct =() => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        axiosPrivate.get('https://lit-wildwood-53633.herokuapp.com/product')
        .then(res => setProducts(res.data))
    },[]);
    return [products, setProducts];
};

export default useProduct;
