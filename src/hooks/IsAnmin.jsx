import { useContext } from "react";
import { ContexM } from "../Authentication/AuProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const IsAnmin = () => {

    const { user } = useContext(ContexM)

    console.log({ user });

    const [axiosSecure] = useAxiosSecure()

    const { data: isAdmin ,isLoading:isAdminLoding} = useQuery({
        queryKey: ['isAdmin', user?.email],
        // fnc
        queryFn: async () => {


            // fetch(`http://localhost:5000/user/admin/${user.email}`)

            const res = await axiosSecure.get(`user/admin/${user.email}`);

            console.log(res, 'admin email ');
            return res.data.admin
        }

    })
    
    return  [isAdmin,isAdminLoding]


};

export default IsAnmin;