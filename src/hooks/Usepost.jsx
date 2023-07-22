import { useQuery } from "@tanstack/react-query";
import { ContexM } from "../Authentication/AuProvider";
import { useContext } from "react";



const usePost = () => {
    const { user } = useContext(ContexM)

    // const token = localStorage.getItem("jwtToken")


    const token = localStorage.getItem('jwtToken');

    const { refetch, data: post = [] } = useQuery({

        queryKey: ['post', user?.email],

        // enabled: !loader,


        queryFn: async () => {
            const res = await fetch(`https://server-nine-ecru.vercel.app/personPost?email=${user?.email}`, {
                headers: { authorization: `barer ${token}` }
            })

            return res.json();
        },


    })

    return [post, refetch]

}
export default usePost;