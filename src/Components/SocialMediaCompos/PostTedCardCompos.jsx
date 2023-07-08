import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ContexM } from "../../Authentication/AuProvider";
import IsAnmin from "../../hooks/IsAnmin";
import { FaArrowAltCircleDown, FaArrowAltCircleRight, FaChartBar, FaFunnelDollar, FaHardHat, FaHeart, FaHeartBroken, FaLowVision, FaSave, FaThumbsDown, FaThumbsUp } from "react-icons/fa";

const PostTedCardCompos = () => {

    const [isAdmin] = IsAnmin()
    // const isAdmin=



    const [posts, SetPost] = useState([])


    useEffect(() => {

        fetch('http://localhost:5000/allpost')
            .then(res => res.json())
            .then(data => SetPost(data))


    }, [])

    // console.log(posts);

    const [like, Setlike] = useState(true)

    return (
        <div className="grid gap-4">


            {
                posts.map(res => <section key={res._id}>


                    <div className="w-  mx-auto border-2 rounded-lg pb-4">

                        <div className="flex items-center">
                            <div className="avatar mt-2 ml-2">
                                <div className="w-14 rounded-full">
                                    <img src={res.profilePhoto} alt="" />
                                </div>
                            </div>
                            {/* right side */}


                            <div className="pl-4">
                                <h5>{res.name}</h5>
                                <p>Follow</p>

                            </div>

                        </div>
                        {/* content section  */}

                        <div className="w-full pb-2 px-2 pt-5 border-t-2 mt-5">
                            <h5 className="pb-2">{res.title}</h5>
                            <p>{res.description}</p>

                        </div>

                        {/* img sestion */}
                        <div>

                            <img className="w-full p-2 rounded-sm " src={res.img} alt="" />

                        </div>

                        <div className=" ml-2 mt-2 ">

                            <div className="flex items-center">
                                <div onClick={() => Setlike(!like)} className="">
                                    {

                                        like ?
                                            <FaHeart onClick={() => Setlike(!like)} className="text-red-400 text-2xl ml-4"></FaHeart>
                                            :

                                            <FaHeartBroken className=" text-2xl ml-4"></FaHeartBroken>
                                    }

                                </div>

                                {/* comment section */}
                                <div className="flex justify-center items-center ml-20">

                                    <input type="text" placeholder="comment" className="input input-bordered w-[320px]" />

                                    <button className="text-2xl -ml-8">
                                        <abbr title="comment">

                                            <FaArrowAltCircleRight></FaArrowAltCircleRight>
                                        </abbr>
                                    </button>
                                </div>

                                {/* ends of comment */}

                                {/* save btn */}
                                <div className="ml-10 ">
                                    <button className="text-2xl"> <abbr title="save Post">
                                        <FaSave></FaSave>
                                    </abbr>
                                    </button>
                                </div>
                            </div>




                        </div>
                    </div>
                </section>
                )

            }




        </div >
    );
};

export default PostTedCardCompos;