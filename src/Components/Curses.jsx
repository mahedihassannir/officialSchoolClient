import { useEffect, useState } from "react";

const Curses = () => {

    const [data, Setdata] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/class`).then(res => res.json()).then(data => Setdata(data))


    }, [])

    return (
        <div className="w-full  h-screen ">

            <h1 className="text-center text-3xl font-bold text mb-20 text-[#db87f0]">Here is some Curses</h1>

            <div className="grid   xs:grid-cols-1 lg:grid-cols-3 md:grid-cols-2">

                {
                    data.map(res => <div key={res._id}>
                        <div className="card w-80 bg-base-100 h-[250px] shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={res.img} alt="Shoes" className=" h-52 rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{res.title}</h2>

                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Curses;