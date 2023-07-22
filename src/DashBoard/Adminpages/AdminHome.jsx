import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useEffect } from "react";
import { FaPodcast, FaUser } from "react-icons/fa";

import { Chart } from "react-google-charts";
const AdminHome = () => {


    const token = localStorage.getItem('jwtToken');

    const { data: users = [], refetch } = useQuery(['user'], async () => {

        const res = await fetch('https://server-nine-ecru.vercel.app/user', {

            headers: { authorization: `Bearer ${token}` }

        })
        return res.json()


    })

    // all teachers


    const [data, SetData] = useState([])

    useEffect(() => {


        fetch(`https://server-nine-ecru.vercel.app/allpost`)
            .then(res => res.json())
            .then(data => {
                SetData(data)
            })

    })
    const data2 = [
        ["ID", "increase business", "Fertility Rate", "Region", "Population"],
        ["CAN", 80.66, 1.67, "Social Posts", 33739900],
        ["DEU", 79.84, 1.36, "Teachers", 81902307],
        ["DNK", 78.6, 1.84, "Students", 5523095],
        ["EGY", 72.73, 2.78, "Accounts", 79716203],

    ];
    const options = {
        title:
            "Correlation Business increase decrease  infos " +
            "hourly logins and posts (24)",
        hAxis: { title: "decrease or increase" },
        vAxis: { title: "Business increase decrease  infos" },
        bubble: { textStyle: { fontSize: 12 } },
    };

    return (
        <div className="w-full h-screen">

            {/* here is users teachers revinew and total product buy   */}


            <div className="grid grid-cols-3 ml-20 mt-10">
                <div className="flex justify-center items-center text-center w-[250px] h-[200px] border-2 rounded-md order-2">
                    <div className="">

                        <div className="flex items-center gap-2">

                            <p className="my-2 text-2xl text-blue-500"><FaUser></FaUser></p>
                            <p className="text-lg font-bold">Total User</p>
                        </div>
                        <p className="text-2xl font-bold text-violet-700">+ {users.length}</p>
                    </div>



                </div>
                <div className="flex justify-center items-center text-center w-[250px] h-[200px] border-2 rounded-md order-2">
                    <div className="">

                        <div className="flex items-center gap-2">

                            <p className="my-2 text-2xl text-blue-500"><FaUser></FaUser></p>
                            <p className="text-lg font-bold">Total Teacher</p>
                        </div>
                        {/* <p className="text-2xl font-bold text-violet-700">+ {data2.length}</p> */}
                    </div>



                </div>
                <div className="flex justify-center items-center text-center w-[250px] h-[200px] border-2 rounded-md order-2">

                    <div className="">

                        <div className="flex items-center gap-2">

                            <p className="my-2 text-2xl text-blue-500"><FaPodcast></FaPodcast></p>
                            <p className="text-lg font-bold">Total Social Post</p>
                        </div>
                        <p className="text-2xl font-bold text-violet-700">+ {data.length}</p>
                    </div>



                </div>
            </div>
            {/* ends */}

            {/* this is analytics section */}
            <div className="mt-5 ml-10 ">
                <div className="flex gap-3">
                    {/* chart analytics */}
                    <div className="w-11/12 mx-auto ">


                        <Chart
                            chartType="BubbleChart"
                            width="100%"
                            height="400px"
                            data={data2}
                            options={options}
                        />

                    </div>

                </div>


            </div>
            {/* ends */}




        </div>
    );
};

export default AdminHome;