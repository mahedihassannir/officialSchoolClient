import { useLoaderData } from "react-router-dom";

// extra css

import '../ExtraCss/bg.css'

// btn css
import '../ExtraCss/event.css'


const DetailEvent = () => {

    const data = useLoaderData()


    // in this data ki ki ase event ee ta oo bose jabe video er section eee




    return (
        <div className="w-11/12 mx-auto h-screen my-3 ">
            <div className="fr">
                <div className="py-3">

                    <img className="w-11/12 mx-auto border-2 p-2 rounded-md border-[#db87f0]" src={data.image} alt="" />

                    {/* des */}
                    <div className="ml-20  my-2">

                        <h1 className="text-lg font-semibold">Event Details</h1>
                    </div>
                    <hr />
                    <div className="w-11/12 mx-auto mt-4 ">
                        <p>description : {data.description}</p>
                        {/* why this event */}
                        <div className="">
                            <p></p>
                        </div>
                        {/* time */}
                        <div className="">
                            <p>

                            </p>    
                        </div>

                    </div>

                </div>
                <div className="   ml-2 py-3">

                    <div className="">
                        <div className=" border-2 p-3 rounded-md border-[#db87f0] ">

                            <div>
                                {/* i frame also dynamic */}
                                <iframe className="rounded-md" width="560" height="315" src="https://www.youtube.com/embed/wWQAN7bBlI8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


                            </div>
                            <div className="">
                                <div className="pl-2 pt-2">
                                    <p className="text-lg font-bold"><span className="text-[#db87f0]">আমাদের স্বনামধন্য </span>স্কুলে  er aiyozone</p>


                                    <p className="text-lg">
                                        inestracture name : Mahedi Hassan

                                    </p>
                                    {/*  */}

                                    <p className=" leading-9 py-2 text-lg">
                                        <p className="text-2xl font-semibold">how to be a programmer in 6 month</p>
                                    </p>

                                    <hr className="py-2" />

                                    {/*sites  */}
                                    <p className="text-lg">
                                        course fee : $1000
                                    </p>
                                    {/* facilites section */}
                                    <div className="">
                                        <h1 className="text-lg font-bold pl-4">Facelites</h1>
                                        <hr />
                                    </div>
                                    <div className="grid grid-cols-3 my-4 gap-2">

                                        {/*token  */}
                                        <div className="">
                                            <p>course fee : $1000</p>
                                            <p>course fee : $1000</p>
                                            <p>course fee : $1000</p>

                                        </div>
                                        <div className="">
                                            <p>course fee : $1000</p>
                                            <p>course fee : $1000</p>
                                            <p>course fee : $1000</p>

                                        </div>

                                        <div className="">
                                            <p>course fee : $1000</p>
                                            <p>course fee : $1000</p>
                                            <p>course fee : $1000</p>

                                        </div>

                                    </div>
                                    {/*  */}
                                    {/* btn div */}
                                    <div className="text-center py-2">

                                        <button id="btn">Inroll Now</button>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default DetailEvent;