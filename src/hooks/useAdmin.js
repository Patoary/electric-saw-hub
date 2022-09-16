import { useEffect, useState } from "react"
import axiosPrivate from "../Api/axiosPrivate";

const useAdmin = user => {
    const email = user?.email;
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        email && axiosPrivate.get(`https://lit-wildwood-53633.herokuapp.com/admin/${email}`)
            .then(res => {
                setAdmin(res.data.admin);
                setAdminLoading(false);
            })
    }, [user,email]);

    return [admin, adminLoading]
}

export default useAdmin;