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
                    <div className="w-11/12 mx-auto mt-4 ">
                        <p>description : {data.description}</p>

                    </div>

                </div>
                <div className="  ml-2 py-3">

                    <div className="">
                        <div className=" border-2 p-3 rounded-md border-[#db87f0] ">

                            <div>
                                {/* i frame also dynamic */}
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/wWQAN7bBlI8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


                            </div>
                            <div className="">
                                <div className="pl-2 pt-2">
                                    <p className="text-lg font-bold"><span className="text-[#db87f0]">আমাদের স্বনামধন্য </span>স্কুলে  er aiyozone</p>


                                    <p className="text-lg">
                                        guest name :
                                    </p>
                                    {/*  */}

                                    <p className=" leading-9 py-2 text-lg">
                                        <span className="text-[#cf62eb]">Description</span> : {data.description}
                                    </p>

                                    <hr className="py-2" />

                                    {/*sites  */}
                                    <p className="text-lg">
                                        sites : 1000 //${data.sites}
                                    </p>

                                    {/*token  */}
                                    <p className="text-lg">

                                        food :token //${data.token} to get food in event 

                                    </p>
                                    {/*  */}
                                    {/* btn div */}
                                    <div className="text-center py-2">

                                        <button id="btn">Intarested</button>
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