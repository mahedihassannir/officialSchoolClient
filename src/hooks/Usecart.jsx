import { useQuery } from "@tanstack/react-query";
import { ContexM } from "../Authentication/AuProvider";
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";



const useCart = () => {
    const { user } = useContext(ContexM);

    // const token = localStorage.getItem("jwtToken")

    const [axiosSecure] = useAxiosSecure()

    console.log({ axiosSecure });

    const token = localStorage.getItem('jwtToken');
    const { refetch, data: cart = [] } = useQuery({

        queryKey: ['cart', user?.email],
        enabled: !!user?.email,

        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
        //         headers: { authorization: `barer ${token}` }
        //     })

        //     return res.json();
        // },

        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            console.log(`res from axios`, res);
            
            return res.data;

        }

    })

    return [cart, refetch]

}
export default useCart;