import { useEffect } from "react";
import { useState } from "react";

const OurTeachers = () => {

    const [teachers, Setteachers] = useState([])

    useEffect(() => {

        const url = 'http://localhost:5000/uteacher'

        fetch(url)
            .then(res => res.json())
            .then(data => Setteachers(data))


    }, [])

    return (
        <div className="mb-20 grid grid-cols-5 gap-4">
            {
                teachers.map(res => <div className="" key={res._id}>

                    <div>
                        <div className="w-[280px] pb-2  rounded-lg border-2">
                            <div className="">
                                <img className=" w-full h-[250px] p-2" src={res.image} alt="" />
                            </div>
                            <div className="pb-4">

                                <div className="pt-2 pl-2">
                                    <p className="pt-1 "><span className="font-sans text-red-400  ">name </span>: <span className="text-[17px] font-semibold">{res.TeacherName} </span></p>
                                    <p className="pt-1 "><span className="font-sans text-green-400">Position </span>: <span className="text-[17px] font-semibold">{res.title} </span></p>
                                    <p className="pt-1 "><span className="font-sans text-purple-400">category </span>: <span className="text-[17px] font-semibold">{res.category} </span></p>

                                </div>

                            </div>
                            <div className="w-full py-2 mx-auto text-center cursor-pointer" id="btn">
                                <button>view details</button>
                            </div>
                        </div>
                    </div>

                </div>)
            }

        </div>
    );
};

export default OurTeachers;