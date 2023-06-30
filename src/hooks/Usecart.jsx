import { useQuery } from "@tanstack/react-query";
import { ContexM } from "../Authentication/AuProvider";
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";



const useCart = () => {
    const { user,loader } = useContext(ContexM);

    // const token = localStorage.getItem("jwtToken")

    const [axiosSecure] = useAxiosSecure()


    const token = localStorage.getItem('jwtToken');

    const { refetch, data: cart = [] } = useQuery({

        queryKey: ['cart', user?.email],

        enabled: !loader,


        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
        //         headers: { authorization: `barer ${token}` }
        //     })

        //     return res.json();
        // },

        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
    
            
            return res.data;

        }

    })

    return [cart, refetch]

}
export default useCart;