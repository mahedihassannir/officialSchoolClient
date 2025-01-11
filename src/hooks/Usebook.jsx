import { useQuery } from "@tanstack/react-query";
import { ContexM } from "../Authentication/AuProvider";
import { useContext } from "react";
// import useAxiosSecure from "./useAxiosSecure";



const UseBook = () => {
    const { user, loader } = useContext(ContexM);

    // const token = localStorage.getItem("jwtToken")


    // const token = localStorage.getItem('jwtToken');


    const { refetch, data: Book = [] } = useQuery({

        queryKey: ['cart', user?.email],

        enabled: !loader,


        queryFn: async () => {
            const res = await fetch(`https://school-server-main-cgaqorflu-mahedinir34678gmailcoms-projects.vercel.app/books`)

            return res.json();
        },



    })

    return [Book, refetch]
    // 
}

export default UseBook;

