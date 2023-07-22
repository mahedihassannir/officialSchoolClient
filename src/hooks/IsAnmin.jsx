import { useContext } from "react";
import { ContexM } from "../Authentication/AuProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const IsAnmin = () => {

    const { user } = useContext(ContexM)

    const [axiosSecure] = useAxiosSecure()

    const { data: isAdmin ,isLoading:isAdminLoding} = useQuery({
        queryKey: ['isAdmin', user?.email],
        // fnc
        queryFn: async () => {


            // fetch(`https://server-nine-ecru.vercel.app/user/admin/${user.email}`)

            const res = await axiosSecure.get(`user/admin/${user.email}`);

            return res.data.admin
        }

    })
    
    return  [isAdmin,isAdminLoding]


};

export default IsAnmin;