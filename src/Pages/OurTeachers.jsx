import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const OurTeachers = () => {

    const [teachers, Setteachers] = useState([])

    useEffect(() => {

        const url = 'https://school-server-main-cgaqorflu-mahedinir34678gmailcoms-projects.vercel.app/uteacher'

        fetch(url)
            .then(res => res.json())
            .then(data => Setteachers(data))


    }, [])

    return (
        <div className="mb-20 grid grid-cols-3 mx-10">
            {
                teachers.map(res => <div className="" key={res._id}>

                    <div>
                        <div className="m-2 pb-2  rounded-lg border-2">
                            <div className="">
                                <img className=" w-full  h-[300px] p-2" src={res.image} alt="" />
                            </div>
                            <div className="pb-4">

                                <div className="pt-2 pl-2">
                                    <p className="pt-1 text-gray-600 text-lg "><span className="font-sans   ">name </span>: <span className="text-[17px] font-semibold">{res.TeacherName} </span></p>
                                    <p className="pt-1 text-gray-600 "><span className="font-sans">Position </span>: <span className="text-[17px] font-semibold">{res.title} </span></p>
                                    <p className="pt-1 text-gray-600 "><span className="font-sans ">category </span>: <span className="text-[17px] font-semibold">{res.category} </span></p>

                                </div>

                            </div>
                            <div id="btn" className="relative">
                                <Link to={`/teacherDetail/${res._id}`}>
                                    <button className="w-full  text-center cursor-pointer">View details</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>)
            }

        </div>
    );
};

export default OurTeachers;