import { useEffect, useState } from "react"
import axiosPrivate from "../Api/axiosPrivate";

const useAdmin = user => {
    const email = user.email;
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        email && axiosPrivate.get(`http://localhost:4000/admin/${email}`)
            .then(res => {
                setAdmin(res.data.admin);
            })
    }, [user]);

    return [admin]
}

export default useAdmin;