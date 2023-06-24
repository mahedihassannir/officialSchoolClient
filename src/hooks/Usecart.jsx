import { useQuery } from "@tanstack/react-query";
import { ContexM } from "../Authentication/AuProvider";
import { useContext } from "react";

const useCart = () => {
    const { user } = useContext(ContexM);

    const token = localStorage.getItem("jwtToken")
    
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['Cart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
                headers: { authorization: `barer ${token}` }
            })
            console.log(res);
            return res.json();
        },
    })

    return [cart, refetch]

}
export default useCart;