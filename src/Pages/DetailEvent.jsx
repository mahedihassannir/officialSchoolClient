import { Link, useLoaderData } from "react-router-dom";

// extra css

import '../ExtraCss/bg.css'

// btn css
import '../ExtraCss/event.css'


const DetailEvent = () => {

    const data = useLoaderData()


    // in this data ki ki ase event ee ta oo bose jabe video er section eee
    const textStyle = {
        color: 'rgb(#db87f0, #340e8d,#00ff00)', // Replace with your desired RGB values
    };



    return (
        <div className="w-11/12 mx-auto pb-20 my-3 ">
            <div className="flex">
                <div className="py-3 w-1/2">

                    <img className=" border-2 p-2 rounded-md border-[#db87f0]" src={data.image} alt="" />

                    {/* des */}
                    <div className="ml-20  my-2">

                        <h1 className="text-lg font-semibold">Event Details</h1>
                    </div>
                    <hr />

                    <div className="w-1/2  mt-4 ">
                        <p className="text-lg  font-semibold ">Title : {data.title}</p>
                        {/* why this event */}

                        <div className="">
                            <p className="flex flex-wrap">Description : {data.description}</p>
                        </div>
                        {/* time */}
                        <div className="mt-2">
                            <p className="text-lg font-serif font-semibold ">
                                Start Time : {data.startedTime}
                            </p>
                        </div>

                    </div>

                </div>
                {/* ends */}
                <div className="border-l-2 mx-2 border-gray-700"></div>
                {/* add  */}
                <div className="   ml-2 py-3">

                    <div className="">
                        <div className=" border-2 p-3 rounded-md border-[#db87f0] ">

                            <div>
                                {/* i frame also dynamic */}
                                <iframe className="rounded-md" width="560" height="315" src="https://www.youtube.com/embed/wWQAN7bBlI8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


                            </div>
                            <div className="">
                                <div className="pl-2 pt-2">
                                    <p className="text-lg font-bold text-red-400 " >মেহেদীর সাথে সম্পূর্ণ ওয়েব ডেভেলপমেন্ট</p>


                                    <p className="text-lg">
                                        প্রশিক্ষকের নামঃ মাহেদী হাসান

                                    </p>
                                    {/*  */}

                                    <p className=" leading-9 py-2 text-lg">
                                        <p className="text-2xl font-semibold " >কিভাবে ৩ মাসে একজন ফ্রেশার প্রোগ্রামার হবেন</p>
                                    </p>

                                    <hr className="py-2" />

                                    {/* facilites section */}
                                    <div className="">
                                        <h1 className="text-lg font-bold pl-4">সু্যোগ - সুবিধা</h1>
                                        <hr />
                                    </div>
                                    <h3 className="my-2">১৩ টিরও বেশি প্রযুক্তি আপনি এই কোর্সে শিখবেন </h3>
                                    <div className="grid grid-cols-4 my-4 gap-2">



                                        {/*token  */}
                                        <div className="">
                                            <p># HTML</p>
                                            <p># CSs</p>
                                            <p># Tailwind css</p>

                                        </div>
                                        <div className="">
                                            <p># Bootstrape</p>
                                            <p># Js : Javascript</p>
                                            <p># React js</p>

                                        </div>

                                        <div className="">
                                            <p># Firebase</p>
                                            <p># Mongodb</p>
                                            <p># Node.js</p>

                                        </div>
                                        <div className="">
                                            <p>#Express js</p>
                                            {/* <p>#</p>
                                            <p>#</p> */}

                                        </div>

                                    </div>

                                    {/*ends  */}

                                    <div className="">
                                        <h3 className="text-violet-950 text-lg font-semibold font-serif">
                                            এই কোর্সে আপনি ২০+ টিরও বেশি প্রকল্প তৈরি কবেন
                                        </h3>
                                    </div>

                                    <div className="mt-4"><p className="text-lg mb-2 text-[#340e8d] font-bold">
                                        কোর্স ফিঃ <span className="text-red-500">১২০০</span> টাকা
                                    </p></div>

                                    {/* btn div */}
                                    <div className="text-center py-2">
                                        <Link to="/courses">
                                            <button id="btn">Inroll Now</button>
                                        </Link>
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