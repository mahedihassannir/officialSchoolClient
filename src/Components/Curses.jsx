import { useEffect, useState } from "react";

const Curses = () => {

    const [data, Setdata] = useState([])

    useEffect(() => {
        fetch(`https://school-server-main-cgaqorflu-mahedinir34678gmailcoms-projects.vercel.app/class`).then(res => res.json()).then(data => Setdata(data))


    }, [])

    return (
        <div className="w-full  h-screen ">

            <h1 className="text-center text-3xl font-bold text mb-20 text-[#db87f0]">আমাদের ভিডিও</h1>

            <div className="grid   xs:grid-cols-1 lg:grid-cols-3 md:grid-cols-2">

                {
                    data.map(res => <div key={res._id}>

                    </div>)
                }
            </div>

        </div>
    );
};

export default Curses;